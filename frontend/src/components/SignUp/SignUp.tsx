import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

type SignUpProps = {
  onClose: () => void;
  onChange: () => void;
  showSignUpPopUp: () => void;
  onSignUpSuccess: (token: string) => void;
};

export const SignUp: React.FC<SignUpProps> = ({ onClose, onChange, showSignUpPopUp, onSignUpSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const mediumStrongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!mediumStrongPasswordRegex.test(password)) {
      setPasswordError(
        'Please enter a valid password (8 characters minimum, including at least one uppercase letter, one lowercase letter, and one digit)'
      );
      return;
    }

    try {
      const response = await axios.post('http://35.204.183.215:80/api/auth/sign-up', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('User added successfully');
        setEmail('');
        setPassword('');
        showSignUpPopUp();
        onClose();
        const token = response.data.token;
        onSignUpSuccess(token);
      } else {
        console.log('Error adding user');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    let emailErrorTimer: NodeJS.Timeout;
    let passwordErrorTimer: NodeJS.Timeout;

    if (emailError) {
      emailErrorTimer = setTimeout(() => {
        setEmailError('');
      }, 5000);
    }

    if (passwordError) {
      passwordErrorTimer = setTimeout(() => {
        setPasswordError('');
      }, 5000);
    }

    return () => {
      clearTimeout(emailErrorTimer);
      clearTimeout(passwordErrorTimer);
    };
  }, [emailError, passwordError]);

  const handleRememberMe = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  useEffect(() => {
    if (rememberMe) {
      Cookies.set('email', email);
      Cookies.set('password', password);
    } else {
      Cookies.remove('email');
      Cookies.remove('password');
    }
  }, [rememberMe, email, password]);

  useEffect(() => {
    const savedEmail = Cookies.get('email');
    const savedPassword = Cookies.get('password');

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  return (
    <>
      <div className="sign-up">
        <div className="sign-up__header">
          <button className="sign-up__header__back" onClick={onClose}></button>

          <h3 className="sign-up__header__title">Welcome to Mriya!</h3>

          <p className="sign-up__header__paragraph">Sign up to make your experience better.</p>
        </div>
        <div className="sign-up__form">
          <form onSubmit={handleSignUp}>
            <div className="sign-up__form__input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="sign-up__form__input__style"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="sign-up__form__input">
              <label htmlFor="password">Password</label>
              <div className="password-input-container" style={{ lineHeight: 1 }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="sign-up__form__input__style"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password.length > 0 && !showPassword && (
                  <div className="password-visibility-icon" onClick={() => setShowPassword(true)} />
                )}
                {password.length > 0 && showPassword && (
                  <div className="password-visibility-icon__change" onClick={() => setShowPassword(false)} />
                )}
              </div>
              {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
            <div className="sign-up__form__checkbox">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="sign-up__form__checkbox__style"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              <label htmlFor="checkbox" className="sign-up__form__checkbox__label">
                Remember me
              </label>
            </div>
            <button type="submit" className="sign-up__form__button">
              Sign up
            </button>
          </form>
          <p className="sign-up__or">or</p>
          <div className="sign-up__social">
            <button className="sign-up__social__button sign-up__social__apple"></button>
            <button className="sign-up__social__button sign-up__social__google"></button>
            <button className="sign-up__social__button sign-up__social__facebook"></button>
          </div>
          <div className="sign-up__footer">
            <p className="sign-up__footer__p">Already have an account?</p>
            <button className="sign-up__footer__button" onClick={onChange}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
