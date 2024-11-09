import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      console.log('File uploaded:', file.name);
      // Implement further upload logic here
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://images.yourstory.com/cs/images/companies/aiplanetlogo-1673886703297.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt="Logo" />
      </div>
      <label className="upload-btn">
        📄 Upload PDF
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          hidden
        />
      </label>
    </nav>
  );
}

export default Navbar;
