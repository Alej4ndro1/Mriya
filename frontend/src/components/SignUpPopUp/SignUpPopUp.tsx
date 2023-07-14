import React from 'react';

type SignUpPopUpProps = {
  onClose: () => void;
};

export const SignUpPopUp:React.FC<SignUpPopUpProps> = ({onClose}) => {
  return (
    <div className='sign-up-pop-up'>
      <h3 className='sign-up-pop-up__title'>You are signed up!</h3>
      <p className='sign-up-pop-up__p'>Enjoy the experience of using the platform with your profile. Donate, help and receive help from others.</p>
      <button className='sign-up-pop-up__button' onClick={onClose}>Okay</button>
    </div>
  );
};