import React from 'react';
import { Alert, Button } from 'react-bootstrap';

function GameStatus({ gameOver, won, word, resetGame, currentPlayer, scores }) {
  return (
    <div>
      <Alert variant="info">
        Current Player: Player {currentPlayer}
      </Alert>
      <Alert variant="secondary">
        Scores: Player 1: {scores.player1} | Player 2: {scores.player2}
      </Alert>
      {gameOver && (
        <Alert variant={won ? 'success' : 'danger'}>
          <Alert.Heading>{won ? `Player ${currentPlayer} Won!` : 'Game Over'}</Alert.Heading>
          <p>The word was: {word}</p>
          <Button onClick={resetGame} variant="primary">
            Play Again
          </Button>
        </Alert>
      )}
    </div>
  );
}

export default GameStatus;

