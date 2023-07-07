import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DonationProcess } from '../DonationProcess';
import { NonFinancial } from '../NonFinancial';

export const DonateButtons = () => {
  const location = useLocation();
  const [showPaymentProcess, setShowPaymentProcess] = useState(false);
  const [showNonFinancialHelp, setShowNonFinancialHelp] = useState(false);

  const handleDonateButtonClick = () => {
    setShowPaymentProcess(true);
    window.scrollTo(0, 0);
  };

  const handleHelpButton = () => {
    setShowNonFinancialHelp(true);
    window.scrollTo(0, 0);
  };
  const isDreamPage = location.pathname.includes('/dreams/');

  return (
    <div className={`make-it-happen__buttons ${showPaymentProcess ? 'shadowed' : ''}`}>
      {isDreamPage && !showPaymentProcess ? (
        <button className="make-it-happen__buttons__donate" onClick={handleDonateButtonClick}>
          Donate
        </button>
      ) : (
        <Link to="/dreams">
          <button className="make-it-happen__buttons__donate">
            Donate
          </button>
        </Link>
      )}
      <button className="make-it-happen__buttons__help" onClick={handleHelpButton}>Help non-financially</button>

      {showNonFinancialHelp ?
        <NonFinancial setShowNonFinancialHelp={setShowNonFinancialHelp} /> : ''}


      {showPaymentProcess ? <DonationProcess setShowPaymentProcess={setShowPaymentProcess} /> : ''}
    </div>
  );
};
