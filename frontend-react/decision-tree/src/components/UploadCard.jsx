import React, { useState } from 'react';
import axios from 'axios';

const UploadCard = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    if (!file) {
      setStatus('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload_dataset', formData);
      setStatus(response.data.message || response.data.error);
    } catch (error) {
      setStatus('Failed to upload dataset.');
    }
  };

  return (
    <div className="bg-white shadow-md p-4">
      <h3 className="text-lg text-gray-700 cursor-pointer">Upload Dataset</h3>
      <div className="mt-2">
        <input 
          type="file" 
          accept=".csv,.json" 
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-2 border border-gray-300 mb-2"
        />
        <button 
          onClick={handleUpload}
          className="w-full bg-green-600 text-white p-2 hover:bg-green-700 transition-colors"
        >
          Upload
        </button>
        <p className="mt-2">{status}</p>
      </div>
    </div>
  );
};

export default UploadCard;