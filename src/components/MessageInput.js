import React from 'react';
import './MessageInput.css';

function MessageInput() {
  return (
    <div className="message-input-container">
      <input
        type="text"
        placeholder="Send a message..."
        className="message-input"
      />
      <button className="send-button">
        <span>➤</span>
      </button>
    </div>
  );
}

export default MessageInput;
