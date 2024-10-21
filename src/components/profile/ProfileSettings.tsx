import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Импортируем контекст темы
import "./ProfileSettings.css";

interface SettingsModalProps {
  closeSettingsModal: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ closeSettingsModal }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Используем контекст для получения текущей темы и функции переключения

  return (
    <div className="settings-modal" onClick={closeSettingsModal}>
      <div
        className="settings-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="settings-close btn">
          <button onClick={closeSettingsModal} className="close-settings-btn">
            X
          </button>
        </div>
        <div className="dark-mode-switch">
          <span>Dark mode</span>
          <label>
            {/* Связываем чекбокс с темой и вызываем toggleTheme по клику */}
            <input 
              type="checkbox" 
              checked={theme === 'dark'} // Если тема темная, чекбокс отмечен
              onChange={toggleTheme} // При изменении вызываем переключение темы
            />
            <span className="slider" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
