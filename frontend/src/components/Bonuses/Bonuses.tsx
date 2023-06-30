import React from 'react';
import bonuses25 from '../../images/homePage/Bonuses.png';
import bonuses50 from '../../images/homePage/Bonuses_second.png';
import bonuses25desktop from '../../images/homePage/bonuses25-desktop.svg';
import bonuses50desktop from '../../images/homePage/bonuses50-desktop.svg';
import { DonateButtons } from '../DonateButtons/';

export const Bonuses = () => {

  return (
    <div className="bonuses">
      <div className='bonuses__container'>
        <div className='bonuses__desktop-wrapper'>
          <div className='bonuses__text-block'>
            <h2 className='bonuses__title'>Bonuses</h2>
            <p className='bonuses__paragraph'>Get bonuses for your donations and non-financial help. Then transform them into promo codes. This is our way to say thank you for your help. The more dreams you help to fulfill the more bonuses you get. </p>
            <p className='bonuses__paragraph-desktop'>Get bonuses for your donations and non-financial help. <br /> Then transform them into promo codes. This is our way to say thank you for <br /> your help. The more dreams you help to fulfill the more bonuses you get. </p>
          </div>
          <div>
            <div className="bonuses__card-first">
              <div className='bonuses__card-wrapper'>
                <div>
                  <h3 className='bonuses__card-first-title'>Bonus card</h3>
                  <p className='bonuses__card-first-paragraph'>For helping to fulfill Vladyslav’s dream</p>
                </div>
                <div className='bonuses__bonus-image'>
                  <img
                    src={bonuses25}
                    alt="bonus"

                  />
                </div>
                <div className='bonuses__bonus-image-desktop'>
                  <img src={bonuses25desktop} alt="bonus" />
                </div>
              </div>
            </div>
            <div className="bonuses__card-second">
              <div className='bonuses__card-wrapper'>
                <div>
                  <h3 className='bonuses__card-second-title'>Bonus card</h3>
                  <p className='bonuses__card-second-paragraph'>For helping to fulfill Iryna’s dream </p>
                </div>
                <div className='bonuses__bonus-image'>
                  <img src={bonuses50} alt="bonus" />
                </div>
                <div className='bonuses__bonus-image-desktop'>
                  <img src={bonuses50desktop} alt="bonus" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DonateButtons />
      </div>
    </div >
  );
};