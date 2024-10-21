import React, { useState } from "react";
import "./Profile.css";

interface ProfileProps {
    username: string;
}

const Profile: React.FC<ProfileProps> = ({ username }) => {
    const [profileImage, setProfileImage] = useState<string>("https://via.placeholder.com/150");
    const [isEditing, setIsEditing] = useState(false);

    // Функция для загрузки нового фото профиля
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProfileImage(reader.result as string);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
    <>
    <div className="profile-main">
    <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image-wrapper">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="profile-image"
                    />
                    {isEditing && (
                        <div className="profile-edit-overlay">
                            <label htmlFor="image-upload" className="edit-label">
                                Upload photo
                            </label>
                            <input
                                type="file"
                                id="image-upload"
                                className="image-input"
                                onChange={handleImageChange}
                            />
                        </div>
                    )}
                </div>
                <h2 className="profile-username">{username}</h2>
            </div>

            <div className="profile-actions">
                <button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Save" : "Edit profile"}
                </button>
            </div>
        </div>
    </div>
    </>
    )
};

export default Profile;
