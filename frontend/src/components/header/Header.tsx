import React from 'react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 1440);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleBurgerMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__container">
        <img className="header__container__logo" src="https.svg" alt="logo" />
        <a className="header__container__come-back-alive" href="https://savelife.in.ua/" target="_blank" rel="noopener noreferrer">
          <div className="header__container__come-back-alive__text">
          </div>
        </a>
      </div>

      <div className={`header__burger-menu ${isMenuOpen ? 'header__burger-menu--open' : ''}`} onClick={handleBurgerMenuClick}>
        <div className={`header__burger-menu__line-1 ${isMenuOpen ? 'header__burger-menu__line-1--open' : ''}`}></div>
        <div className={`header__burger-menu__line-2 ${isMenuOpen ? 'header__burger-menu__line-2--open' : ''}`}></div>
        <div className={`header__burger-menu__line-3 ${isMenuOpen ? 'header__burger-menu__line-3--open' : ''}`}></div>
      </div>

      {(isMobile && isMenuOpen) || !isMobile ? (
        <div className={`header__navigation 
          ${isMobile && isMenuOpen ? 'header__navigation--open' : ''}`}
        >

          <ul className="header__navigation__list">
            <li className="header__navigation__list__item">About Us</li>
            <li className="header__navigation__list__item">Dreams</li>
            <li className="header__navigation__list__item">Ask for Help</li>
            <li className="header__navigation__list__item">Contact</li>
          </ul>

          <div className="header__navigation__profile-buttons">
            <button className="header__navigation__profile-buttons__sign-up">Sign up</button>
            <button className="header__navigation__profile-buttons__log-in">Log in</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
