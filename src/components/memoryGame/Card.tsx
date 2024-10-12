import React from 'react';

import './MemoryGame.css';

interface CardProps {
  card: string;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, isFlipped, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped ? <span className='mg-card-span'>{card}</span> : <span className='mg-card-span'>❓</span>}
    </div>
  );
};

export default Card;