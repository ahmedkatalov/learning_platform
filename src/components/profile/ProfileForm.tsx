import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SettingsModal from './ProfileSettings'; // Импортируем модалку настроек
import "./ProfileForm.css";

interface ProfileFormProps {
    username: string;
    closeProfileModal: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ username, closeProfileModal }) => {
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    // Открытие и закрытие модалки настроек
    const openSettingsModal = () => {
        setIsSettingsModalOpen(true);
    };

    const closeSettingsModal = () => {
        setIsSettingsModalOpen(false);
    };

    return (
        <div className="modal-overlay" onClick={closeProfileModal}>
            <div className="form-container" onClick={(e) => e.stopPropagation()}>
                <form className="profile-form">
                    <button className="close-btn-2" onClick={closeProfileModal}>X</button>
                    <div className="profile-photo">
                        <img src="#" className="profile-pic" />
                        <div className="username-email">
                            {username}
                        </div>
                    </div>
                    <div className="profile-page">
                        <NavLink 
                            to="/profile" 
                            className='profile-page-link'
                            onClick={closeProfileModal}
                        >
                            Your profile
                        </NavLink>
                        <a 
                            href="#" 
                            className='profile-settings' 
                            onClick={(e) => {
                                e.preventDefault();
                                openSettingsModal();
                            }}
                        >
                            Settings
                        </a>
                    </div>
                    <div className="profile-out-box">
                        <a href="#" className='profile-out'>
                            <i className="fa-solid fa-right-from-bracket"></i>Sign out
                        </a>
                    </div>
                </form>
            </div>

            {/* Отображаем модалку настроек, если она открыта */}
            {isSettingsModalOpen && (
                <SettingsModal closeSettingsModal={closeSettingsModal} />
            )}
        </div>
    );
}

export default ProfileForm;
