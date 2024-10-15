import { FC, useState, useEffect } from 'react';
import Card from './Card';

import './MemoryGame.css';

const initialCards = ['🦉', '🎮', '🍎', '🍌', '🍒', '🍇', '📸', '🩰', '🎨', '🦄', '🫧', '👩🏻‍💻',
                      '🦉', '🎮', '🍎', '🍌', '🍒', '🍇', '📸', '🩰', '🎨', '🦄', '🫧', '👩🏻‍💻'];

const MemoryGame: FC = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState<boolean>(false); 
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    setCards(shuffleCards(initialCards));
  }, []);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setGameOver(true);
    }
  }, [matchedCards]);

  const handleCardClick = (index: number) => {
    if (!gameStarted || flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      checkMatch(newFlippedCards);
    }
  };

  const checkMatch = (flipped: number[]) => {
    const [firstIndex, secondIndex] = flipped;
    if (cards[firstIndex] === cards[secondIndex]) {
      setMatchedCards([...matchedCards, firstIndex, secondIndex]);
    }

    setTimeout(() => {
      setFlippedCards([]);
    }, 1000);
  };

  const shuffleCards = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setMatchedCards([]);
    setCards(shuffleCards(initialCards));
  };

  const handleRestart = () => {
    setGameStarted(false);
  };

  return (
    <div className="game-board">
      {!gameStarted ? (
        <div className='div-with-text'>
          <h2 className='mg-text'>Let's check your "Memory"!</h2>
          <button className='memory-game-btn' onClick={handleStartGame}>Start game</button>
        </div>
      ) : gameOver ? (
        <div className='div-with-text two'>
          <h2 className='mg-text'>Congratulations! You finished the game!</h2>
          <button className='memory-game-btn' onClick={handleRestart}>Play again</button>
        </div>
      ) : (
        cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))
      )}
    </div>
  );
};

export default MemoryGame;