import React from 'react';

export const DreamCard = () => {
  return (
    <div className="dream-card">
      <div className="dream-card__wrapper">
        <button className="dream-card__favorite"></button>

        <div className="dream-card__image">
          <img src="https://picsum.photos/200/300" alt="dream" className='dream-card__image__photo'/>
        </div>

        <div className="dream-card__content">
          <div className="dream-card__content__the-one-who-asks">
            <h3 className='dream-card__content__the-one-who-asks__name'>The one who asks</h3>
            <p className='dream-card__content__the-one-who-asks__age'>age</p>
          </div>

          <div className="dream-card__content__progress"></div>

          <div className="dream-card__content__amount">
            <p className='dream-card__content__amount__current'>Current amount</p>
            <p className='dream-card__content__amount__current'>Needed amount</p>
          </div>

          <div className="dream-card__content__amount-value">
            <p className='dream-card__content__amount-value__rate'>32 589</p>

            <p className='dream-card__content__amount-value__rate'>2 000 000</p>
          </div>
        </div>
      </div>
    </div>
  );
};