import React from 'react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWindowResize = () => {
    setIsMenuOpen(window.innerWidth > 320);
  };

  useEffect(() => {
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
        <img
          className="header__container__logo"
          src="https.svg"
          alt="logo"
        />

        <button className="header__container__come-back-alive"></button>
      </div>

      <div className="header__burger-menu" onClick={handleBurgerMenuClick}>
        <div className="header__burger-menu__line-1"></div>
        <div className="header__burger-menu__line-2"></div>
        <div className="header__burger-menu__line-3"></div>
      </div>

      {isMenuOpen && (
        <div className="header__navigation">
          <input
            className="header__navigation__search-input"
            type="text"
            placeholder="Search"
          />

          <ul className="header__navigation__list">
            <li className="header__navigation__list__item">About Us</li>
            <li className="header__navigation__list__item">Dreams</li>
            <li className="header__navigation__list__item">Ask for Help</li>
            <li className="header__navigation__list__item">Contact</li>
            <li className="header__navigation__list__item">Profile</li>
          </ul>
        </div>
      )}
    </div>
  );
};
