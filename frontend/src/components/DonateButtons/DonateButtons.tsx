import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DonationProcess } from '../DonationProcess';

export const DonateButtons = () => {
  const location = useLocation();
  const [showPaymentProcess, setShowPaymentProcess] = useState(false);

  const handleDonateButtonClick = () => {
    setShowPaymentProcess(true);
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
      <Link to="/dreams">
        <button className="make-it-happen__buttons__help">Help non-financially</button>
      </Link>

      {showPaymentProcess ? <DonationProcess setShowPaymentProcess={setShowPaymentProcess} /> : null}
    </div>
  );
};
