import React, { useEffect } from 'react';
import axios from 'axios';

const VariablesCard = ({ 
  columns, 
  selectedFeatures, 
  setSelectedFeatures, 
  selectedTarget, 
  setSelectedTarget,
  setColumns 
}) => {
  const fetchColumns = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/dataset_overview');
      setColumns(response.data.columns || []);
    } catch (error) {
      console.error('Error fetching columns:', error);
    }
  };

  const handleFeatureChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setSelectedFeatures(options);
  };

  return (
    <div className="bg-white shadow-card p-4 rounded-sm">
      <h3 className="text-lg text-secondary-text font-medium cursor-pointer mb-2">Select Variables</h3>
      <div>
        <button 
          onClick={fetchColumns}
          className="w-full bg-primary text-white p-2 rounded-sm hover:bg-primary-hover transition-colors duration-300 mb-4"
        >
          Load Columns
        </button>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-gray-700">Features (X):</label>
          <select 
            multiple 
            value={selectedFeatures}
            onChange={handleFeatureChange}
            className="w-full h-24 p-2 border border-gray-300 rounded-sm text-sm"
          >
            {columns.map(col => (
              <option key={col} value={col}>{col}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Target (Y):</label>
          <select 
            value={selectedTarget}
            onChange={(e) => setSelectedTarget(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-sm text-sm"
          >
            <option value="">Select Target</option>
            {columns.map(col => (
              <option key={col} value={col}>{col}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VariablesCard;