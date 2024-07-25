import React from 'react';

const HANGMAN_PARTS = [
  (mistakes) => <div key="scaffold">________</div>,
  (mistakes) => <div key="vertical">|</div>,
  (mistakes) => <div key="horizontal">|--------</div>,
  (mistakes) => <div key="rope">|        O</div>,
  (mistakes) => <div key="body">|        |</div>,
  (mistakes) => <div key="arms">|       /|\</div>,
  (mistakes) => <div key="legs">|       / \</div>,
];

function HangmanDrawing({ mistakes }) {
  return (
    <div className="hangman-drawing">
      {HANGMAN_PARTS.slice(0, mistakes + 1).map((part, index) => part(mistakes))}
    </div>
  );
}

export default HangmanDrawing;
