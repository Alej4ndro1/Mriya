import React from 'react';

interface PaymentCardProps {
  cardNumber: string;
  cardName: string;
  expirationDate: string;
  securityCode: string;
  handleCardNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleExpirationDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecurityCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePaymentValidation: (isValid: boolean) => void;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({
  cardNumber,
  cardName,
  expirationDate,
  securityCode,
  handleCardNumberChange,
  handleCardNameChange,
  handleExpirationDateChange,
  handleSecurityCodeChange,
  handlePaymentValidation,
}) => {

  return (
    <div className="payment-card">
      <label className='payment-card__input__card-number'>
        Card number
        <input
          type='text'
          value={cardNumber}
          onChange={handleCardNumberChange}
          className='payment-card__input payment-card__input__card-number'
          placeholder='0000 0000 0000 0000'
        />
      </label>
      <label className='payment-card__input__card-name'>
        Cardholder's name
        <input
          type='text'
          value={cardName}
          onChange={handleCardNameChange}
          className='payment-card__input payment-card__input__card-name'
          placeholder='Name Surname'
        />
      </label>
      <label className='payment-card__input__card-date'>
        Expiration date
        <input
          type='text'
          value={expirationDate}
          onChange={handleExpirationDateChange}
          className='payment-card__input payment-card__input__card-date'
          placeholder='MM/YY'
        />
      </label>
      <label className='payment-card__input__card-code'>
        Security code
        <input
          type='text'
          value={securityCode}
          onChange={handleSecurityCodeChange}
          className='payment-card__input payment-card__input__card-code'
          placeholder='000'
        />
      </label>
    </div>
  );
};
