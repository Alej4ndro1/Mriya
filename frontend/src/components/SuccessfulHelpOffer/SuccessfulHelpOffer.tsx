import React from 'react';

type SuccessfulCardProps = {
  onOkayClick: () => void;
};

export const SuccessfulHelpOffer:React.FC<SuccessfulCardProps> = ({ onOkayClick }) => {
  return (
    <div className="successfull-help-offer">
      <h3 className="successfull-help-offer__header">Your offer
to help was submitted</h3>
      <p className="successfull-help-offer__text">We will review the information and send it to the dream holder. In case of need we will contact you. Thank you for your help! You are amazing!</p>
      <button className="successfull-help-offer__button" onClick={onOkayClick}>Okay</button>
    </div>
  );
};