
import React, { useState } from 'react';
import { auth, googleProvider } from "../../fireBase/fireStore";
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import './RegisterForm.css';

interface RegisterFormProps {
  closeModal: () => void;  // Пропс, который закрывает модальное окно
}


const RegisterForm: React.FC<RegisterFormProps> = ({ closeModal }) => {
  const navifate = useNavigate()
  const [isActive, setIsActive] = useState(false);
  const [role, setRole] = useState<string>("teacher");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);  // Для сообщений об ошибке

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("role", role);
      navifate("./home")
      closeModal();  // Закрываем модальное окно только при успешной регистрации
    } catch (error) {
      setErrorMessage("Failed to register. Please try again.");
      console.error("Registration error:", error);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem('role', role);  // default role for Google login
      closeModal();  // Закрываем модальное окно только при успешной авторизации через Google
    } catch (error) {
      setErrorMessage("Google sign-in failed. Please try again.");
      console.error("Google sign-in error:", error);
    }
  };

  const handleSignUpClick = (selectedRole: string) => {
    setRole(selectedRole);
    setIsActive(true);
    setName("")
    setEmail("")
  };

  const handleSignInClick = (selectedRole: string) => {
    setRole(selectedRole);
    setIsActive(false);
    setName("")
    setEmail("")
  };

  return (
    <div className={`reg-form-container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form className='register-form'>
          <h1 className='reg-form-create-acc'>Create Account</h1>
          <div className="social-iconss">
            <a href="#" onClick={handleGoogleSignIn} className="icon reg-form-container-a">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon reg-form-container-a">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon reg-form-container-a">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon reg-form-container-a">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span className='reg-form-span-text'>or use your email for registration</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className='reg-form-input' type="text" placeholder="Name" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='reg-form-input' type="email" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='reg-form-input' type="password" placeholder="Password" />
          <button onClick={handleSignUp} className='reg-form-btn' type="submit">Sign Up</button>

          {/* Отображение сообщения об ошибке */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>

      <div className="form-container sign-in">
        <form className='register-form'>
          <h1 className='reg-form-create-acc'>Create Account</h1>
          <div className="social-iconss">
            <a href="#" onClick={handleGoogleSignIn} className="icon reg-form-container-a">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon reg-form-container-a">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon reg-form-container-a">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon reg-form-container-a">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span className='reg-form-span-text'>or use your email and password</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className='reg-form-input' type="text" placeholder="Name" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='reg-form-input' type="email" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='reg-form-input' type="password" placeholder="Password" />
          <button onClick={handleSignUp} className='reg-form-btn' type="submit">Sign Up</button>

          {/* Отображение сообщения об ошибке */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className='reg-form-greeting'>Hello, Friend!</h1>
            <p className='reg-form-p-text'>Join as a teacher</p>
            <button className="hidden reg-form-btn" id="login" onClick={() => handleSignInClick("teacher")}>Sign Up</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className='reg-form-greeting'>Hi, CutiePatutie!</h1>
            <p className='reg-form-p-text'>Do you want to be our student?</p>
            <button className="hidden reg-form-btn" id="register" onClick={() => handleSignUpClick("student")}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
