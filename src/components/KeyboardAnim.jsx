
import React from 'react';
import './KeyboardButtons.css'; // Import the CSS file

const KeyboardAnims = () => {
  return (
    <div className="button-container">
      <button className="button button-up">↑</button>
      <button className="button button-left">←</button>
      <button className="button button-down">↓</button>
      <button className="button button-right">→</button>
    </div>
  );
};

export default KeyboardAnims;
