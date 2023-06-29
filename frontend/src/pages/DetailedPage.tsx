import { DonateButtons } from '../components/DonateButtons/DonateButtons';
import React from 'react';

export const DetailedPage = () => {
  return (
    <div className="container">
      <div className="detailed-page">

        <div className="detailed-page__wrapper">
          <div className="detailed-page__bread-crumps">
            <button className="detailed-page__bread-crumps__home-button">Home</button>
            <div className="detailed-page__bread-crups__next"></div>
            <button className="detailed-page__bread-crumps__dreams-button">Dreams</button>
            <div className="detailed-page__bread-crups__next"></div>
            <button className="detailed-page__bread-crumps__dream-name">'s Dream</button>
          </div>

          <h3 className='deailed-page__name'>'s Dream</h3>
          <div className="detailed-page__yellow-el"></div>

          <button className="detailed-page__share-button"></button>
        </div>

        <div className="detailed-page__gallery">
          <image className="detailed-page__gallery__image-1"></image>
          <image className="detailed-page__gallery__image-2"></image>
          <image className="detailed-page__gallery__image-3"></image>
          <image className="detailed-page__gallery__image-4"></image>
        </div>

        <div className="detailed-page__favourites">
        </div>

        <div className="detailed-page__category">
          <div className="detailed-page__category__title">Place</div>
          <div className="detailed-page__category__text">Category</div>
          <div className="detailed-page__category__title">Kind of help</div>
        </div>

        <h3 className="detailed-page__title">Vladyslav needs an injection of Zolgensma</h3>

        <p className="detailed-page__description">
        Vladyslav is 11 months old. He is the only child in the family. The family is from Lviv region.
        At the end of November last year, the boy was diagnosed with SMA type 2 - Spinal Muscular Atrophy. The boy cannot crawl, sit and roll over on his own. And the worst thing is that the disease is progressing and Vladyslav is getting weaker every day. Without treatment, over time, he may lose the ability to eat, swallow, and even breathe. 

        This disease used to be considered incurable. But now Vladyslav has a chance for a normal life. The only way to save the boy's life is a single injection of Zolgensma, which stops the development of the disease forever. However, the cost of these drugs is too high - more than 2 million dollars.

        That’s why the boy's family is asking for help, calling on caring people to make Vladyslav's dream to live come true.</p>
      </div>
      
      <DonateButtons />
    </div>
  );
};