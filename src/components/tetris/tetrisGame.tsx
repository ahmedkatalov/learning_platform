import Board from './game/Board';
import { FC, useEffect } from 'react';
import UpcomingBlocks from './game/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';

import "./tetris.css"



const TetrisGame:FC=() => {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  useEffect(() => {
    const handleKeyDown = (event:KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <h1 className='tetris-app-title'>Tetris</h1>
      <Board currentBoard={board} />
      <div className="controls">
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button className='start-tetris' onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  );
}

export default TetrisGame;