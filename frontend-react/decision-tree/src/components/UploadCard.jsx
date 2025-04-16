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
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Dataset</h3>
      <div className="space-y-4">
        <input 
          type="file" 
          accept=".csv,.json" 
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleUpload}
          className="w-full bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 transition duration-300"
        >
          Upload
        </button>
        {status && (
          <p 
            className={`mt-2 text-sm font-medium ${
              status.includes('Failed') ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadCard;