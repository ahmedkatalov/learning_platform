import { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { auth } from "../../fireBase/fireStore";
import { onAuthStateChanged, User } from 'firebase/auth';

import SignInForm from '../signInForm/SignInForm';
import SignUpForm from '../signUpForm/SignUpForm';
import ExitModal from '../exitModal/ExitModal';

import './Header.css';

interface HeaderProps {
    users: any;
    onLogout: () => void;
  }

const Header: FC<HeaderProps> = ({ onLogout }) => {
    const duration = 400;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles: { [key: string]: React.CSSProperties } = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
    const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const openSignInModal = () => {
        setIsSignInModalOpen(true);
    };

    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };

    const openExitModal = () => {
        setIsExitModalOpen(true);
    };

    const closeModal = () => {
        setIsSignInModalOpen(false);
        setIsRegisterModalOpen(false);
        setIsExitModalOpen(false);
    };

    return (
        <header className="header-fixed-box">
            <div className="header-content">
                <div className='header-logo-box'>
                    <h2 className="headline">SkillSprint</h2>
                    <div className='header-logo fa-brands fa-squarespace'></div>
                </div>

                <div className='nav-block'>
                    <NavLink to="/pricing"
                             className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}>
                        Pricing
                    </NavLink>
                    <NavLink to="/home"
                             className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}>
                        Home
                    </NavLink>
                    <NavLink to="/courses"
                             className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}>
                        Courses
                    </NavLink>
                    <NavLink to="/aboutus"
                             className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}>
                        About Us
                    </NavLink>
                    <NavLink to="/a"
                             className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}>
                        Contact
                    </NavLink>
                </div>
                
                {user ? (
                    <div>
                        <button className='header-exit-btn' onClick={openExitModal}>
                            <div className='header-user-pic'></div>
                        </button>

                        <Transition in={isExitModalOpen} timeout={duration} unmountOnExit>
                            {(state) => (
                                <div
                                    className="modal-overlay-for-exit"
                                    onClick={closeModal}
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state],
                                    }}>
                                    <div
                                        className="modal-content-for-exit"
                                        onClick={(e) => e.stopPropagation()}>
                                        <button className="close-btn" onClick={closeModal}>X</button>
                                        <ExitModal onLogout={onLogout} />
                                    </div>
                                </div>
                            )}
                        </Transition>
                    </div>
                ) : (
                    <div className='header-btns'>

                        <button className="sign-in-btn" onClick={openSignInModal}>
                            Sign in
                        </button>

                        <Transition in={isSignInModalOpen} timeout={duration} unmountOnExit>
                            {(state) => (
                                <div
                                    className="modal-overlay"
                                    onClick={closeModal}
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state],
                                    }}>
                                    <div
                                        className="modal-content"
                                        onClick={(e) => e.stopPropagation()}>
                                        <button className="close-btn" onClick={closeModal}>X</button>
                                        <SignInForm />
                                    </div>
                                </div>
                            )}
                        </Transition>

                        <button className="reg-btn" onClick={openRegisterModal}>
                            Sign up
                        </button>

                        <Transition in={isRegisterModalOpen} timeout={duration} unmountOnExit>
                            {(state) => (
                                <div className="modal-overlay-for-reg"
                                    onClick={closeModal}
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state],
                                    }}>
                                    <div className="modal-content-for-reg"
                                         onClick={(e) => e.stopPropagation()}>
                                        <button className="close-btn" onClick={closeModal}>X</button>
                                        <SignUpForm closeModal={closeModal} />
                                    </div>
                                </div>
                            )}
                        </Transition>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;