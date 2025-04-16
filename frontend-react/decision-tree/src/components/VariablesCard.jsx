import React from 'react';
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
    <div className="bg-white shadow-lg p-6 rounded-sm ">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Variables</h3>
      <button 
        onClick={fetchColumns}
        className="w-full bg-blue-500 text-white py-2 rounded-sm  hover:bg-blue-600 transition duration-300 mb-6"
      >
        Load Columns
      </button>
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">Features (X):</label>
        <select 
          multiple 
          value={selectedFeatures}
          onChange={handleFeatureChange}
          className="w-full h-32 p-2 border border-gray-300 rounded-sm  text-sm focus:ring-2 focus:ring-blue-500"
        >
          {columns.map(col => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-2">Target (Y):</label>
        <select 
          value={selectedTarget}
          onChange={(e) => setSelectedTarget(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-sm  text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Target</option>
          {columns.map(col => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VariablesCard;