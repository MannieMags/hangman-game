// src/components/Keyboard.js
import React from 'react';
import { Button } from 'react-bootstrap';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Keyboard({ guessedLetters, handleGuess, disabled }) {
  return (
    <div className="keyboard">
      {ALPHABET.map(letter => (
        <Button
          key={`key-${letter}`}
          variant="outline-primary"
          className="m-1"
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;
