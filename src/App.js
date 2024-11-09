import React from 'react';
import Navbar from './components/Navbar';
import MessageInput from './components/MessageInput';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        {/* Add content like question-answer interactions here */}
      </div>
      <MessageInput />
    </div>
  );
}

export default App;
