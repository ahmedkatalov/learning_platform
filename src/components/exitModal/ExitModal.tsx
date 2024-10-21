import { FC } from 'react';


import './ExitModal.css';

interface ExitModalProps {
    onLogout: () => void;
  }


const ExitModal: FC<ExitModalProps> = ({ onLogout }) => {
    
    return (
      <div className='exit-modal-container'>
        <h2 className='exit-modal-title'>So you're absolutely sure that <br/>
            you wanna log out from this awesome platform?
        </h2>
        <div className='exit-modal-star'></div>
        <button className='exit-modal-btn' onClick={onLogout}>wish u luck then, amigo</button>
      </div>
    ); 
  };
  
  export default ExitModal;