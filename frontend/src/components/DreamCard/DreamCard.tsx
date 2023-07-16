import React from 'react';
import { Dream } from '../../types/Dream';

type DreamType = {
  dream: Dream
};

export const DreamCard: React.FC<DreamType> = ({ dream }) => {
  const { name, age, amount, sumOfDonates } = dream;

  return (
    <div className="dream-card">
      <div className="dream-card__wrapper">
        <button className="dream-card__favorite"></button>

        <div className="dream-card__image">
          <img src="https://picsum.photos/200/300" alt="dream" className='dream-card__image__photo'/>
        </div>

        <div className="dream-card__content">
          <div className="dream-card__content__the-one-who-asks">
            <h3 className='dream-card__content__the-one-who-asks__name'>{name}</h3>
            <p className='dream-card__content__the-one-who-asks__age'>{age}</p>
          </div>

          <div className="dream-card__content__progress"></div>

          <div className="dream-card__content__amount">
            <p className='dream-card__content__amount__current'>Current amount</p>
            <p className='dream-card__content__amount__current'>Needed amount</p>
          </div>

          <div className="dream-card__content__amount-value">
            <p className='dream-card__content__amount-value__rate'>₴ {sumOfDonates}</p>

            <p className='dream-card__content__amount-value__rate'>₴ {amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};