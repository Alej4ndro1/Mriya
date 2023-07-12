import React, {useState} from 'react';

type LogInProps = {
  onClose: () => void;
  onChange: () => void;
};

export const LogIn:React.FC<LogInProps> = ({onClose, onChange}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return(
    <div className='sign-up'>
      <div className="sign-up__header">
        <button className="sign-up__header__back login__back" onClick={onClose}></button>
        <h3 className='sign-up__header__title log-in__header__title'>Welcome back!</h3>
        <p className='sign-up__header__paragraph login__p'>Log in to make your experience better.</p>
      </div>
      <div className="sign-up__form">
        <form>
          <div className="sign-up__form__input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className='sign-up__form__input__style' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="sign-up__form__input">
            <label htmlFor="password">Password</label>
            <div className="password-input-container" style={{ lineHeight: 1 }}>
              <input 
                type={showPassword ? 'text' : 'password'}
                name="password" id="password" placeholder="Enter your password" className='sign-up__form__input__style' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
              {password.length > 0 && !showPassword && (
                <div className="password-visibility-icon" onClick={() => setShowPassword(true)} />
              )}
              {password.length > 0 && showPassword && (
                <div className="password-visibility-icon__change" onClick={() => setShowPassword(false)} />
              )}
            </div>
          </div>
          <div className="sign-up__form__checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" className='sign-up__form__checkbox__style'/>
            <label htmlFor="checkbox" className='sign-up__form__checkbox__label'>Remember me</label>
            <button className="sign-up__footer__button log-in__forgot-button">Forgot password</button>
          </div>
          <button type="submit" className="sign-up__form__button">Log in</button>
        </form>
        <p className='sign-up__or'>or</p>
        <div className="sign-up__social">
          <button className="sign-up__social__button sign-up__social__apple"></button>
          <button className="sign-up__social__button sign-up__social__google"></button>
          <button className="sign-up__social__button sign-up__social__facebook"></button>
        </div>
        <div className="sign-up__footer">
          <p className="sign-up__footer__p">New to Mriya?</p>
          <button className='sign-up__footer__button' onClick={onChange}>Sign up</button>
        </div>
      </div>
    </div>
  );
};