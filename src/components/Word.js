// src/components/Word.js
import React from 'react';

function Word({ word, guessedLetters }) {
  return (
    <div className="word mb-4">
      {word.split('').map((letter, index) => (
        <span key={`letter-${index}`} className="letter mx-2">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default Word;
