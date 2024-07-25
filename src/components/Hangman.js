import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Word from './Word';
import Keyboard from './Keyboard';
import HangmanDrawing from './HangmanDrawing';
import GameStatus from './GameStatus';
import HelpModal from './HelpModal';
import { getRandomWord } from '../utils/words';

const MAX_MISTAKES = 6;

function Hangman() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (word && !word.split('').some(letter => !guessedLetters.includes(letter))) {
      setWon(true);
      setGameOver(true);
      setScores(prevScores => ({
        ...prevScores,
        [`player${currentPlayer}`]: prevScores[`player${currentPlayer}`] + 1
      }));
    }
  }, [word, guessedLetters, currentPlayer]);

  const handleGuess = (letter) => {
    if (gameOver) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setMistakes(mistakes + 1);
      if (mistakes + 1 >= MAX_MISTAKES) {
        setGameOver(true);
      }
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const resetGame = () => {
    setWord(getRandomWord().toUpperCase());
    setGuessedLetters([]);
    setMistakes(0);
    setGameOver(false);
    setWon(false);
    setCurrentPlayer(1);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Hangman Game</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Hangman</Card.Title>
              <HangmanDrawing mistakes={mistakes} />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Word</Card.Title>
              <Word word={word} guessedLetters={guessedLetters} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Keyboard</Card.Title>
              <Keyboard
                guessedLetters={guessedLetters}
                handleGuess={handleGuess}
                disabled={gameOver}
              />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Game Status</Card.Title>
              <GameStatus
                gameOver={gameOver}
                won={won}
                word={word}
                resetGame={resetGame}
                currentPlayer={currentPlayer}
                scores={scores}
              />
            </Card.Body>
          </Card>
          <Button variant="info" onClick={() => setShowHelp(true)} className="mt-3">
            Help
          </Button>
        </Col>
      </Row>
      <HelpModal show={showHelp} onHide={() => setShowHelp(false)} />
    </Container>
  );
}

export default Hangman;


