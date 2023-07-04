import React from 'react';

type SuccessfulCardProps = {
  onOkayClick: () => void;
};

export const SuccessfulCard: React.FC<SuccessfulCardProps> = ({ onOkayClick }) => {
  return (
    <div className="successful-card">
      <h3 className="successful-card__header">Your payment
has been proceeded</h3>
      <p className="successful-card__text">Thank you for the donation!
You are amazing!</p>
      <button className="successful-card__button" onClick={onOkayClick}>Okay</button>
    </div>
  );
};