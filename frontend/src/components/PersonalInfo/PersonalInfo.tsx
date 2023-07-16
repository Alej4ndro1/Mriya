import React, { useState } from 'react';
import { Location } from '../Location';

type PersonalInfoProps = {
  onContinue: (data: {
    location: string[];
    fullName: string;
    age: string;
    phone: string;
    email: string;
  }) => void;
};

export const PersonalInfo:React.FC<PersonalInfoProps> = ({ onContinue }) => {
  const [showLocation, setShowLocation] = useState(false);
  const [initialSelectedCities, setInitialSelectedCities] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleCitySelection = (selectedCities: string[]) => {
    setSelectedCities(selectedCities);
    setInitialSelectedCities(selectedCities);
  };

  const toggleLocation = () => {
    setShowLocation(!showLocation);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.replace(/[^A-Za-zА-ЯЁа-яЇїІіЄєҐґ\s.'-]/g, '').replace(
      /(^|\s)\S/g,
      (match) => match.toUpperCase()
    );

    setName(formattedValue);
    const words = formattedValue.trim().split(' ');
    setIsNameValid(words.every((word) => word.length >= 3));

    if (words.some((word) => word.length < 3)) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let formattedValue = inputValue.replace(/[^0-9.]/g, '');

    const isValidFloat = /^(0\.[0-9]{0,2}|0?(\.[1-9])?|[1-9]\d*(\.\d{1,2})?|200(\.0{1,2})?)$/.test(formattedValue);
    const isValidInteger = /^(0|0?[1-9]\d*|1\d{0,2}|200)$/.test(formattedValue);

    if (!isValidFloat && !isValidInteger) {
      formattedValue = '';
    }

    const numericValue = parseFloat(formattedValue);

    if (numericValue > 1 && numericValue > 200) {
      formattedValue = '';
    }

    setAge(formattedValue);

    if (
      (numericValue < 0.01 && numericValue !== 0) ||
      (numericValue > 0.11 && numericValue < 1) ||
      (numericValue > 1 && isValidFloat)
    ) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9/+/]/g, '');
  
    if (inputValue.length === 1) {
      inputValue = '+38' + inputValue;
    } else if (inputValue.length > 3 && inputValue.substr(0, 3) !== '+38') {
      inputValue = '+38' + inputValue.substr(3);
    }
  
    setPhone(inputValue);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isValidEmail = /^[^\s@]+@gmail\.com$/.test(inputValue);

    setEmail(inputValue);
    setIsEmailValid(isValidEmail || inputValue.trim() === '');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === '';
    const isAgeEmpty = age.trim() === '';
    const isPhoneEmpty = phone.trim() === '';
    const isEmailEmpty = email.trim() === '';

    setIsNameValid(!isNameEmpty);
    setIsAgeValid(!isAgeEmpty);
    setIsPhoneValid(!isPhoneEmpty);
    setIsEmailValid(!isEmailEmpty);

    if (isNameEmpty || isAgeEmpty || isPhoneEmpty || isEmailEmpty) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }

    onContinue({
      location: selectedCities,
      fullName: name,
      age,
      phone,
      email,
    });
  };

  const isFormValid = name.trim() !== '' && age.trim() !== '' && age.trim() !== '0' && phone.trim() !== '' && email.trim() !== '' && selectedCities.length > 0 && isNameValid && isAgeValid && isPhoneValid && isEmailValid ;

  return (
    <div className='personal-info'>
      <form onSubmit={handleFormSubmit}>
        <div className={`personal-info__location ${showError ? 'invalid' : ''}`}>
          <label className='personal-info__label personal-info__location__label'>Location</label>
          <div className='personal-info__location__input' onClick={toggleLocation}>
            {selectedCities.length > 0 ? selectedCities.slice(0, 1).join(', ') : 'Choose your location here'}
          </div>
          {showLocation && (
            <Location
              goBack={() => setShowLocation(false)}
              onSelect={handleCitySelection}
              initialSelectedCities={initialSelectedCities}
            />
          )}
        </div>

        <div className='personal-info__name'>
          <label className='personal-info__label personal-info__name__label'>Full Name</label>
          <input
            className={`personal-info__name__input ${!isNameValid ? 'invalid' : ''}`}
            type='text'
            placeholder='Enter your name and surname here'
            value={name}
            onChange={handleNameChange}
          />
          {!isNameValid && (
            <p className='personal-info__error'>
              Please enter a valid full name (at least 3 characters per word).
            </p>
          )}
        </div>

        <div className='personal-info__age'>
          <label className='personal-info__label personal-info__age__label'>Age</label>
          <input
            className={`personal-info__age__input ${!isAgeValid || age.trim() === '0' ? 'invalid' : ''}`}
            type='text'
            placeholder='Enter your age here (y.o.)'
            value={age}
            onChange={handleAgeChange}
            onBlur={() => setIsAgeValid(age.trim() !== '')}
          />
          {!isAgeValid || age.trim() === '0' && (
            <p className='personal-info__error'>Please enter a valid age (0.1 to 200).</p>
          )}
        </div>

        <div className='personal-info__phone'>
          <label className='personal-info__label personal-info__phone__label'>Phone number</label>
          <input
            className={`personal-info__phone__input ${phone.length !== 13 && phone.length > 0 ? 'invalid' : ''}`}
            type="tel"
            placeholder="+38 (000) 000 00 00"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={() => {
              if (phone.trim() === '') {
                setPhone('');
              }
            }}
          />
          {!isPhoneValid && (
            <p className='personal-info__error'>Please enter a valid phone number (10 digits).</p>
          )}
        </div>

        <div className='personal-info__email'>
          <label className='personal-info__label personal-info__email__label'>Email</label>
          <input
            className={`personal-info__email__input ${!isEmailValid ? 'invalid' : ''}`}
            type='text'
            placeholder='Enter your email here'
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setIsEmailValid(email.trim() !== '')}
          />
          {!isEmailValid && (
            <p className='personal-info__error'>Please enter a valid email address (example: example@gmail.com).</p>
          )}
        </div>

        <button className='personal-info__button' disabled={!isFormValid}>
          Continue
        </button>
      </form>
    </div>
  );
};