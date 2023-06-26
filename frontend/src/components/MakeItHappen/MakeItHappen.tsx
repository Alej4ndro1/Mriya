import React, { useEffect, useState } from 'react';
import { DonateButtons } from '../DonateButtons/DonateButtons';


export const MakeItHappen = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="make-it-happen">
        <div className='wrap'>

          <h1 className="make-it-happen__title">Make it happen!</h1>

          <p className="make-it-happen__text">Fuel dreams of people and animals for not letting them burn out. Donate and provide non-monetary help with Mriya service.</p>

          {window.innerWidth >= 1440 && <DonateButtons />}
        </div>

        <div className="make-it-happen__images">
          <div className="make-it-happen__images__cat">
          </div>

          <div className="make-it-happen__images__heart">
          </div>

          <div className="make-it-happen__images__dog">
          </div>

          <div className="make-it-happen__images__yellow-el">
          </div>

          <div className="make-it-happen__images__love">
            <p className="make-it-happen__images__love__text">Love</p>
          </div>

          <div className="make-it-happen__images__woman">
          </div>

          <div className="make-it-happen__images__donate">
            <p className="make-it-happen__images__love__text">Donate</p>
          </div>

          <div className="make-it-happen__images__elderly">
            <div className="make-it-happen__images__elderly__img" />
          </div>

          <div className="make-it-happen__images__girl">
          </div>

          <div className="make-it-happen__images__blue-el">
          </div>

          <div className="make-it-happen__images__heart-in-hand">
          </div>

          <div className="make-it-happen__images__blue-el-2">
          </div>

          <div className="make-it-happen__images__help">
            <p className="make-it-happen__images__love__text">Help</p>
          </div>

          <div className="make-it-happen__images__military">
          </div>

          <div className="make-it-happen__images__blue-el-3">
          </div>

          <div className="make-it-happen__images__blue-el-4">
          </div>

          <div className="make-it-happen__images__yellow-el-2">
          </div>
        </div>
      </div>

      {window.innerWidth < 1440 && <DonateButtons />}
    </div>
  );
};