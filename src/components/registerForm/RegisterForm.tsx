import React, { useState } from 'react';

import './RegisterForm.css';

const RegisterForm: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSignUpClick = () => {
    setIsActive(true);
  };

  const handleSignInClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`reg-form-container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form className='register-form '>
          <h1 className='reg-form-create-acc'>Create Account</h1>
          <div className="social-iconss">
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span className='reg-form-span-text'>or use your email for registration</span>
          <input className='reg-form-input' type="text" placeholder="Name" />
          <input className='reg-form-input' type="email" placeholder="Email" />
          <input className='reg-form-input' type="password" placeholder="Password" />
          <button className='reg-form-btn' type="button">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form className='register-form '>
          <h1 className='reg-form-create-acc'>Create Account</h1>
          <div className="social-iconss">
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon reg-form-container-a"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span className='reg-form-span-text'>or use your email password</span>
          <input className='reg-form-input' type="text" placeholder="Name" />
          <input className='reg-form-input' type="email" placeholder="Email" />
          <input className='reg-form-input' type="password" placeholder="Password" />
          <button className='reg-form-btn' type="button">Sign Up</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className='reg-form-greeting'>Hello, Friend!</h1>
            <p className='reg-form-p-text'>Join as a teacher</p>
            <button className="hidden reg-form-btn" id="login" onClick={handleSignInClick}>Sign Up</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className='reg-form-greeting'>Hi, CutiePatutie!</h1>
            <p className='reg-form-p-text'>Do you want to be our student?</p>
            <button className="hidden reg-form-btn" id="register" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;