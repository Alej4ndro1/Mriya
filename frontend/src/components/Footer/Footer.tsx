import React from 'react';
import Logo from '../../images/homePage/Logo.svg';
import Logo_desktop from '../../images/homePage/Logo.svg';
import facebook from '../../images/contacts/facebook.png';
import telegram from '../../images/contacts/telegram.png';
import instagram from '../../images/contacts/instagram.png';
import whatsapp from '../../images/contacts/watsapp.png';
import linkedin from '../../images/contacts/linkedIn.png';
import C from '../../images/icons/C.png';

export const Footer = () => {

  return (
    <div className="footer">
      <div className="footer__container">
        <div className='footer__desktop-wrapper'>
          <div>
            <a href="" >
              <img src={Logo} alt="logo" className="footer__logo" />
            </a>
            <h3 className='footer__slogan'>
              Let the dreams come true
            </h3>
          </div>

          <div>
            <h1 className='footer__title'>
              Team’s contacts
            </h1>
            <div className='footer__developers-container'>
              <div className="footer__designer-container footer__containers--gap">
                <div className='footer__designer-name'>
                  <h2>UI/UX Designer</h2>
                </div>
                <div className='footer__designer-email'>
                  <h2 className='footer__email'>valeria.tsova@gmail.com</h2>
                </div>
              </div>
              <div className="footer__frontend-container footer__containers--gap">
                <div className='footer__designer-name'>
                  <h2>Frontend Developers</h2>
                </div>
                <div className='footer__designer-email footer__email-horizontal-align'>
                  <h2 className='footer__email'>svetlana.kryukova.job@gmail.com</h2>
                  <h2 className='footer__email'>osobchuk1@gmail.com</h2>
                </div>
              </div>
              <div className="footer__backend-container footer__containers--gap">
                <div className='footer__designer-name'>
                  <h2>Backend Developers</h2>
                </div>
                <div className='footer__designer-email'>
                  <h2 className='footer__email'>valentin.chepiga@gmail.com</h2>
                </div>
              </div>
              <div className="footer__qa-container footer__containers--gap">
                <div className='footer__designer-name'>
                  <h2>QA Specialists</h2>
                </div>
                <div className='footer__designer-email footer__email-horizontal-align'>
                  <h2 className='footer__email'>olha.moroziuk.it@gmail.com</h2>
                  <h2 className='footer__email'>alexispoliyit@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__desktop-info-line'>
          <div className="footer__support">
            <a href="" className='footer__support-topics'>
              <h2>Terms & Policies</h2>
            </a>
            <a href="" className='footer__support-topics'>
              <h2>FAQ</h2>
            </a>
            <a href="" className='footer__support-topics'>
              <h2>Support</h2>
            </a>
          </div>
          <div className="footer__social">
            <a href="" className='footer__social-icons'>
              <img src={facebook} alt="" />
            </a>
            <a href="" className='footer__social-icons'>
              <img src={telegram} alt="" />
            </a>
            <a href="" className='footer__social-icons'>
              <img src={instagram} alt="" />
            </a>
            <a href="" className='footer__social-icons'>
              <img src={whatsapp} alt="" />
            </a>
            <a href="" className='footer__social-icons'>
              <img src={linkedin} alt="" />
            </a>
          </div>
          <div className="footer__rights">
            <img src={C} alt="(C)" />
            <span>2023 Mriya Service. All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};