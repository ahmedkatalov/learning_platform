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
        event.preventDefault(); // Блокирует прокрутку страницы
      }
    };

    // Добавляем обработчик при монтировании компонента
    document.addEventListener('keydown', handleKeyDown);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <h1>Tetris</h1>
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