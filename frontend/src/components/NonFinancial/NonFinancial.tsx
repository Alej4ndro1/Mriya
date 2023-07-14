import React, { useState } from 'react';
import { SuccessfulHelpOffer } from '../SuccessfulHelpOffer/SuccessfulHelpOffer';
import { Location } from '../Location/Location';
import { TypeOfHelp } from '../TypeOfHelp/TypeOfHelp';

type NonFinancialProps = {
  setShowNonFinancialHelp: (showPaymentProcess: boolean) => void;
};

export const NonFinancial: React.FC<NonFinancialProps> = ({ setShowNonFinancialHelp }) => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [showSelector, setShowSelector] = useState(false);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [initialSelectedCities, setInitialSelectedCities] = useState<string[]>([]);
  const [showTypeOfHelp, setShowTypeOfHelp] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [initialSelectedTypes, setInitialSelectedTypes] = useState<string[]>([]);
  const [additionalInfoTouched, setAdditionalInfoTouched] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOkayClick = () => {
    setShowNonFinancialHelp(false);
  };

  if (submitted) {
    return <SuccessfulHelpOffer onOkayClick={handleOkayClick} />;
  }

  const handleCitySelection = (selectedCities: string[]) => {
    setSelectedCities(selectedCities);
    setInitialSelectedCities(selectedCities);
  };

  const handleHelpGoBack = () => {
    setShowTypeOfHelp(false);
  };

  const handleHelpSelection = (selectedTypes: string[]) => {
    setSelectedTypes(selectedTypes);
    setInitialSelectedTypes(selectedTypes);
  };

  const handleTypeOfHelpClick = () => {
    setShowTypeOfHelp(!showTypeOfHelp);
  };
  const handleSelectorClick = () => {
    setShowSelector(!showSelector);
  };

  const isFormValid =
    name.trim() !== '' &&
    phone.trim() !== '' &&
    additionalInfo.trim() !== '' &&
    selectedCities.length !== 0 &&
    selectedTypes.length !== 0;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.replace(/[^A-Za-zА-ЯЁа-яЇїІіЄєҐґ\s.'-]/g, '').replace(
      /(^|\s)\S/g,
      (match) => match.toUpperCase()
    );

    setName(formattedValue);
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

  const handleLocationGoBack = () => {
    setShowSelector(false);
  };

  const handleAdditionalInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalInfo(event.target.value);
  };
  const nonFinancialClasses = `non-financial ${showSelector || showTypeOfHelp ? 'shadowed' : ''}`;

  const cityOptionClasses = `non-financial__option__city ${showTypeOfHelp ? 'type-of-help-open' : ''}`;


  return (
    <div className={nonFinancialClasses}>
      <div className="donation-process__navigation">
        <div className="donation-process__navigation__back" onClick={handleOkayClick}></div>
        <h3 className="donation-process__navigation__title">Non-financial help</h3>
      </div>

      <div className="non-financial__content">
        <div className="non-financial__option">
          <div className={cityOptionClasses} onClick={handleSelectorClick}>
            <p className="non-financial__city">{initialSelectedCities.slice(0, 2).join(', ')}</p>
          </div>
          {showSelector && <Location goBack={handleLocationGoBack} onSelect={handleCitySelection} initialSelectedCities={initialSelectedCities} />}
          <div className="non-financial__option__type-of-help" onClick={handleTypeOfHelpClick}>
            <p className="non-financial__city">{initialSelectedTypes.slice(0, 1).join(', ')}</p>
          </div>
          {showTypeOfHelp && <TypeOfHelp goBack={handleHelpGoBack} onSelect={handleHelpSelection} initialSelectedTypes={initialSelectedTypes} />}
          <div className="non-financial__contacts">
            <form onSubmit={handleFormSubmit}>
              <p className="donation-process__donation-amount__title non-financial__p">Full Name</p>
              <input
                className={`non-financial__input ${name.split(' ').some((word) => word.length < 3) && name.length > 0 ? 'invalid' : ''}`}
                type="text"
                placeholder="Enter your name and surname here"
                value={name}
                onChange={handleNameChange}
                onBlur={() => {
                  if (name.trim() === '' || name.split(' ').some((word) => word.length < 3)) {
                    setName('');
                  }
                }}
              />
              <p className="donation-process__donation-amount__title non-financial__p">Phone number</p>
              <input
                className={`non-financial__input non-financial__input__phone ${phone.length !== 13 && phone.length > 0 ? 'invalid' : ''}`}
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
              <p className="donation-process__donation-amount__title non-financial__p">Additional information</p>
              <textarea
                name="info"
                id="1"
                cols={40}
                rows={10}
                value={additionalInfo}
                onChange={handleAdditionalInfoChange}
                onFocus={() => setAdditionalInfoTouched(true)}
                onBlur={() => {
                  if (additionalInfo.trim() === '') {
                    setAdditionalInfo('');
                  }
                }}
                className={`non-financial__textarea ${additionalInfoTouched && additionalInfo.length === 0 ? 'invalid' : ''}`}
                placeholder="Please, describe what help you can provide exactly. We will contact the dream holder on this issue and send this info to them."
              ></textarea>
              <button type="submit" className="submit-button" disabled={!isFormValid}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
