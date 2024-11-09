import React, { useState } from 'react';
import axios from 'axios';

function UploadPage({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || file.type !== "application/pdf") {
      setStatus("Please upload a valid PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setStatus("Uploading...");
      const response = await axios.post("http://localhost:8000/upload/", formData);
      setStatus("Upload successful!");
      onUploadSuccess(response.data.document_id);
    } catch (error) {
      setStatus("Upload failed. Try again.");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload PDF</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
}

export default UploadPage;
