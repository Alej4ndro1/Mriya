import React from 'react';
import { Link } from 'react-router-dom';

export const DonateButtons = () => {
  return (
    <div className="make-it-happen__buttons">
      
      <Link to='/dreams'><button className="make-it-happen__buttons__donate">Donate</button></Link>

      <Link to='/dreams'><button className="make-it-happen__buttons__help">Help non-financially</button></Link>
    </div>
  );
};