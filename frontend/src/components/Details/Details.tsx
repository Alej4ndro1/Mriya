import { Link } from 'react-router-dom';
import { DonateButtons } from '../DonateButtons/DonateButtons';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: '5%',
  prevArrow: <></>,
  nextArrow: <></>,
};

export const Details = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mobileVers = windowWidth < 1440;
  const desktopVers = windowWidth >= 1440;

  return (
    <div className="detailed__container">
      <div className="detailed__container--2">
        <div className="detailed-page">
          <div className="detailed-page__wrapper">
            <div className="detailed-page__bread-crumps">
              <Link to="/">
                <button className="detailed-page__bread-crumps__home-button"></button>
              </Link>
              <div className="detailed-page__bread-crumps__next"></div>
              <Link to="/dreams">
                <button className="detailed-page__bread-crumps__dreams-button"></button>
              </Link>
              <div className="detailed-page__bread-crumps__next"></div>
              <button className="detailed-page__bread-crumps__dream-name">Name</button>
            </div>

            {mobileVers && <h3 className='detailed-page__name'>'s Dream</h3>}

            {mobileVers && <button className="detailed-page__share-button"></button>}
          </div>
          {desktopVers && <h3 className='detailed-page__name'>'s Dream</h3>}
          

          {mobileVers && (<Slider className="detailed-page__gallery" {...sliderSettings}>
            <img className="detailed-page__gallery__image" src="" alt="Image 1" />
            <img className="detailed-page__gallery__image" src="" alt="Image 2" />
            <img className="detailed-page__gallery__image" src="" alt="Image 3" />
            <img className="detailed-page__gallery__image" src="" alt="Image 4" />
          </Slider>)}

          {desktopVers && (<div className="detailed-page__gallery">
            <img className="detailed-page__gallery__image" src="" alt="Image 1" />
            <img className="detailed-page__gallery__image" src="" alt="Image 2" />
            <img className="detailed-page__gallery__image" src="" alt="Image 3" />
            <img className="detailed-page__gallery__image" src="" alt="Image 4" />
          </div>)}


          <div className="detailed-page__favourites">
          </div>
          {mobileVers && (
            <div className="detailed-page__category">
              <div className="detailed-page__category__title">Place</div>
              <div className="detailed-page__category__title">Category</div>
              <div className="detailed-page__category__title">Kind of help</div>
            </div>
          )}

          {desktopVers &&(<div className="detailed-page__cover">
            <h3 className="detailed-page__title">Vladyslav needs an injection of Zolgensma</h3>

            <p className="detailed-page__description">
            Vladyslav is 11 months old. He is the only child in the family. The family is from Lviv region.
            At the end of November last year, the boy was diagnosed with SMA type 2 - Spinal Muscular Atrophy. The boy cannot crawl, sit and roll over on his own. And the worst thing is that the disease is progressing and Vladyslav is getting weaker every day. Without treatment, over time, he may lose the ability to eat, swallow, and even breathe. 

            This disease used to be considered incurable. But now Vladyslav has a chance for a normal life. The only way to save the boy's life is a single injection of Zolgensma, which stops the development of the disease forever. However, the cost of these drugs is too high - more than 2 million dollars.

            That’s why the boy's family is asking for help, calling on caring people to make Vladyslav's dream to live come true.</p>
            {desktopVers && (
              <div className="detailed-page__desktop--buttons">
                <div className="detailed-page__category">
                  <div className="detailed-page__category__title">Place</div>
                  <div className="detailed-page__category__title">Category</div>
                  <div className="detailed-page__category__title">Kind of help</div>
                </div>
                <div className="detailed-page__favourites">
                </div>
                <button className="detailed-page__share-button"></button>
              </div>
            )}
          </div>
          )}
          {mobileVers && (
            <>
              <h3 className="detailed-page__title">Vladyslav needs an injection of Zolgensma</h3>

              <p className="detailed-page__description">
            Vladyslav is 11 months old. He is the only child in the family. The family is from Lviv region.
            At the end of November last year, the boy was diagnosed with SMA type 2 - Spinal Muscular Atrophy. The boy cannot crawl, sit and roll over on his own. And the worst thing is that the disease is progressing and Vladyslav is getting weaker every day. Without treatment, over time, he may lose the ability to eat, swallow, and even breathe. 

            This disease used to be considered incurable. But now Vladyslav has a chance for a normal life. The only way to save the boy's life is a single injection of Zolgensma, which stops the development of the disease forever. However, the cost of these drugs is too high - more than 2 million dollars.

            That’s why the boy's family is asking for help, calling on caring people to make Vladyslav's dream to live come true.</p>
            </>
          )}
        </div>
        
        {mobileVers && <DonateButtons />}
      </div>
      {desktopVers && <DonateButtons /> }
    </div>
  );
};