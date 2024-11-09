import React, { useState } from 'react';
import axios from 'axios';

function QuestionPage({ documentId }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) {
      setStatus("Please enter a question.");
      return;
    }

    try {
      setStatus("Processing...");
      const response = await axios.post("http://localhost:8000/ask/", {
        document_id: documentId,
        question: question,
      });
      setAnswer(response.data.answer);
      setStatus("");
    } catch (error) {
      setStatus("Failed to get an answer. Please try again.");
    }
  };

  return (
    <div className="question-container">
      <h2>Ask a Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      />
      <button onClick={handleAsk}>Ask</button>
      {status && <p>{status}</p>}
      {answer && <p><strong>Answer:</strong> {answer}</p>}
    </div>
  );
}

export default QuestionPage;
