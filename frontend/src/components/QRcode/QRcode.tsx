import React from 'react';

import qrcode from '../../images/homePage/QRcode.svg';
import qrcode_desktop from '../../images/homePage/qr-code-desktop.svg';

export const QRcode = () => {

  return (
    <div className="QRcode">
      <div className='QRcode__container'>
        <div className='QRcode__desktop-wrapper'>
          <div>
            <h2 className='QRcode__title'>Share the service idea via social networks</h2>
            <p className='QRcode__paragraph'>Engage others to participate in the process of fulfilling dreams
and make the world a better place to live with us. </p>
          </div>

          <div className="QRcode__image">
            <img
              src={qrcode}
              alt=""
              className='QRcode__image-mobile'
            />
            <img
              src={qrcode_desktop}
              alt=""
              className='QRcode__image-desktop'
            />
          </div>
        </div>
      </div>
    </div >
  );
};