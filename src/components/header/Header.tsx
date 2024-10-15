import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SignInForm from '../signInForm/SignInForm';
import RegisterForm from '../registerForm/RegisterForm';

import './Header.css';

const Header: React.FC = () => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
    
    

    const openSignInModal = () => {
        setIsSignInModalOpen(true);
    };

    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };

    const closeModal = () => {
        setIsSignInModalOpen(false);
        setIsRegisterModalOpen(false);
    };

    return (
        <header className="header-fixed-box">
                <div className="header-content">
                    <h2 className="headline">SkillSprint</h2>

                    <div className='nav-block'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/a"
                            className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/a"
                            className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/a"
                            className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                        >
                            Contact
                        </NavLink>
                    </div>

                    <div className='header-btns'>
                        <button className="sign-in-btn" onClick={openSignInModal}>
                            Sign in
                        </button>

                        {isSignInModalOpen && (
                            <div className="modal-overlay" onClick={closeModal}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <button className="close-btn" onClick={closeModal}>X</button>
                                    <SignInForm />
                                </div>
                            </div>
                        )}

                        <button className="reg-btn" onClick={openRegisterModal}>
                            Sign up
                        </button>

                        {isRegisterModalOpen && (
                            <div className="modal-overlay" onClick={closeModal}>
                                <div className="modal-content-for-reg" onClick={(e) => e.stopPropagation()}>
                                    <button className="close-btn" onClick={closeModal}>X</button>
                                    <RegisterForm  closeModal={closeModal} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </header>
    );
};

export default Header;