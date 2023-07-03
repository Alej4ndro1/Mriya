import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PaymentCard } from '../PaymentCard/PaymentCard';
import { SuccessfulCard } from '../SuccessfulCard/SuccessfulCard';
import { Link } from 'react-router-dom';

type DonationProcessProps = {
  setShowPaymentProcess: (showPaymentProcess: boolean) => void;
};

const donationAmountSliderSettings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  className: 'donation-process__donation-amount__options-slider',
  prevArrow: <></>,
  nextArrow: <></>,
  centerPadding: '15px',
};

export const DonationProcess: React.FC<DonationProcessProps> = ({setShowPaymentProcess }) => {
  const donationOptions = [50, 100, 200, 500, 1000, 2000];
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [isPaymentValid, setIsPaymentValid] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [donationCompleted, setDonationCompleted] = useState<boolean>(false);
  const [showSuccessfulCard, setShowSuccessfulCard] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false);

  const handleOkayClick = () => {
    setDonationCompleted(false);
    setShowSuccessfulCard(false);
    setShowPaymentProcess(false);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;
      setIsSliderVisible(width < 1440);
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleCardNumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    const numericValue = inputValue.replace(/\D/g, '');

    if (numericValue.length > 4) {
      const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ');
      inputValue = formattedValue.trim();
    }

    const isValid = /^\d{0,16}$/.test(numericValue);
    setCardNumber(inputValue);
    if (numericValue.length !== 16) {
      event.target.style.borderColor = 'red';
      handlePaymentValidation(false);
      setDonationCompleted(false);
    } else {
      event.target.style.borderColor = '';
      handlePaymentValidation(true);
    }
  };

  const handleCardNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const words = inputValue.split(' ');
    const sanitizedValue = inputValue.replace(/[^a-zA-Z\s]/g, '');
    const isValid = words.length === 2 && words.every(word => word.length >= 3) && sanitizedValue === inputValue;
    setCardName(sanitizedValue);
    if (!isValid) {
      event.target.style.borderColor = 'red';
      handlePaymentValidation(false);
      setDonationCompleted(false);
    } else {
      event.target.style.borderColor = '';
      handlePaymentValidation(true);
    }
  };

  const handleExpirationDateChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/\D/g, '');

    if (inputValue.length >= 2) {
      inputValue = inputValue.replace(/^(\d{2})(\d{0,2})$/, '$1/$2');
    }

    const isValid = /^(0[1-9]|1[0-2])\/(23|24|25|26|27)$/.test(inputValue);
    setExpirationDate(inputValue);
    if (!isValid) {
      event.target.style.borderColor = 'red';
      handlePaymentValidation(false);
    } else {
      event.target.style.borderColor = '';
      handlePaymentValidation(true);
    }
  };

  const handleSecurityCodeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const isValid = /^\d{0,3}$/.test(numericValue);
    setSecurityCode(numericValue);
    if (numericValue.length !== 3) {
      event.target.style.borderColor = 'red';
      handlePaymentValidation(false);
      setDonationCompleted(false);
    } else {
      event.target.style.borderColor = '';
      handlePaymentValidation(true);
    }
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(event.target.value);
  };

  const handleSliderOptionChange = (option: number) => {
    if (!selectedOption) {
      setSelectedOption(option.toString());
    }
    setDonationAmount(option.toString());
  };

  const handlePaymentValidation = (isValid: boolean) => {
    setIsPaymentValid(isValid);
  };

  const isPayWithCardSelected = selectedOption === 'option3';
  const isDonateButtonDisabled =
    donationAmount === '' ||
    (selectedOption !== 'option1' && selectedOption !== 'option2' && selectedOption !== 'option3') ||
    (selectedOption === 'option3' &&
      (!cardNumber || !cardName || !expirationDate || !securityCode));

  const handleDonateButtonClick = () => {
    if (!isDonateButtonDisabled) {
      setDonationCompleted(true);
      setShowSuccessfulCard(true);
      
    }
  };

  if (donationCompleted && showSuccessfulCard) {
    return  (
      <>
        {showSuccessfulCard ? (<SuccessfulCard onOkayClick={handleOkayClick} />): null}
      </>
    );
  }

  return (
    <div className="donation-process">
      <div className="donation-process__navigation">
        <div className="donation-process__navigation__back" onClick={handleOkayClick}></div>

        <h3 className="donation-process__navigation__title">Donation process</h3>
      </div>

      <div className="donation-process__donation-amount">
        <h3 className="donation-process__donation-amount__title">Select or enter the donation amount</h3>
        {isSliderVisible ? (
          <Slider {...donationAmountSliderSettings}>
            {donationOptions.map((option, index) => (
              <div
                className={`donation-process__donation-amount__options__option ${
                  selectedOption === option.toString() ? 'selected' : ''
                }`}
                key={index}
                onClick={() => handleSliderOptionChange(option)}
              >
                &#8372; {option}
              </div>
            ))}
          </Slider>
        ) : (
          <div className="donation-process__donation-amount__options">
            {donationOptions.map((option, index) => (
              <div
                className={`donation-process__donation-amount__options__option ${
                  selectedOption === option.toString() ? 'selected' : ''
                }`}
                key={index}
                onClick={() => handleSliderOptionChange(option)}
              >
                &#8372; {option}
              </div>
            ))}
          </div>
        )}
        <input
          className="donation-process__donation-amount__input"
          type="text"
          placeholder="Enter your donation amount here"
          value={donationAmount}
          onChange={handleInputChange}
        />
      </div>

      <div className='donation-process__payment-method'>
        <h3 className='donation-process__payment-method__title donation-process__donation-amount__title'>
          Select or enter payment method
        </h3>

        <div className='donation-process__payment-method__options'>
          <label className='radio-label'>
            <input
              type='radio'
              value='option1'
              checked={selectedOption === 'option1'}
              onChange={() => handleOptionChange('option1')}
              className='donation-process__payment-method__options__radio-button'
            />
            Apple Pay
          </label>
          <label className='radio-label'>
            <input
              type='radio'
              value='option2'
              checked={selectedOption === 'option2'}
              onChange={() => handleOptionChange('option2')}
              className='donation-process__payment-method__options__radio-button'
            />
            Google Pay
          </label>
          <label className='radio-label'>
            <input
              type='radio'
              value='option3'
              checked={selectedOption === 'option3'}
              onChange={() => handleOptionChange('option3')}
              className='donation-process__payment-method__options__radio-button'
            />
            Pay with the card
          </label>
        </div>
      </div>

      {isPayWithCardSelected && (
        <PaymentCard
          cardNumber={cardNumber}
          cardName={cardName}
          expirationDate={expirationDate}
          securityCode={securityCode}
          handleCardNumberChange={handleCardNumberChange}
          handleCardNameChange={handleCardNameChange}
          handleExpirationDateChange={handleExpirationDateChange}
          handleSecurityCodeChange={handleSecurityCodeChange}
          handlePaymentValidation={handlePaymentValidation}
        />)}

      <button className='donation-process__donate-button' disabled={isDonateButtonDisabled} onClick={handleDonateButtonClick}>
        Donate
      </button>
    </div>
  );
};
