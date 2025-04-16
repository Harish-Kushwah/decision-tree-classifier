import React, { useState } from 'react';
import axios from 'axios';

const DatasetTab = () => {
  const [datasetInfo, setDatasetInfo] = useState(null);

  const fetchDatasetOverview = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/dataset_overview');
      setDatasetInfo(response.data);
    } catch (error) {
      console.error('Error fetching dataset:', error);
    }
  };

  return (
    <div>
      {datasetInfo && (
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 border">Column</th>
              <th className="p-3 border">Data Type</th>
              <th className="p-3 border">Summary</th>
              <th className="p-3 border">Preview</th>
            </tr>
          </thead>
          <tbody>
            {datasetInfo.columns.map((column, i) => (
              <tr key={column}>
                <td className="p-3 border">{column}</td>
                <td className="p-3 border">{datasetInfo.data_types[i]}</td>
                <td className="p-3 border">{datasetInfo.summary[column]?.count || 'N/A'}</td>
                <td className="p-3 border">{datasetInfo.preview[0]?.[column] || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex justify-end mt-4">
        <button 
          onClick={fetchDatasetOverview}
             className="w-48 bg-blue-500 text-white py-2 rounded-sm  hover:bg-blue-600 transition duration-300"
        >
          {datasetInfo ? 'Refresh' : 'View Dataset'}
        </button>
      </div>
    </div>
  );
};

export default DatasetTab;