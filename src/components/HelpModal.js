// src/components/HelpModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function HelpModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>How to Play Hangman</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>1. A random word is chosen, and blank spaces are displayed for each letter.</p>
        <p>2. Guess letters by clicking on the keyboard buttons.</p>
        <p>3. If the letter is in the word, it will be revealed in its correct position(s).</p>
        <p>4. If the letter is not in the word, a part of the hangman is drawn.</p>
        <p>5. You win if you guess the word before the hangman is fully drawn (6 mistakes).</p>
        <p>6. You lose if the hangman is fully drawn before you guess the word.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelpModal;
