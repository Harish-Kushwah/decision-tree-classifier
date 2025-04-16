import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

const TreeTab = ({
  selectedFeatures,
  selectedTarget,
  activeTab,
  generateTree,
  errorMessage
}) => {


  useEffect(() => {
    generateTree();
  }, [activeTab]);

 
  return (
    <div className="w-full h-[100vh-100px] flex flex-col relative">
      {/* Display Selected Features and Target */}
      <div className="flex flex-wrap gap-4 border-b border-gray-300 pb-2">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Selected Features:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedFeatures.length > 0 ? (
              selectedFeatures.map((feature, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                >
                  {feature}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">None</span>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Selected Target:</h3>
          {selectedTarget ? (
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
              {selectedTarget}
            </span>
          ) : (
            <span className="text-gray-500 text-sm">None</span>
          )}
        </div>
      </div>

      {/* Tree Visualization */}
      <div id="treeContainer" className="w-full h-full h-[600px] mt-4"></div>

      {/* Error Message */}
      {errorMessage.type=="error" && (
        <div className="absolute bottom-2 right-4 bg-red-500 text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-fade">
          {errorMessage.message}
        </div>
      )}
      {errorMessage.type=="success" && (
        <div className="absolute bottom-2 right-4 bg-green-500 text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-fade">
          {errorMessage.message}
        </div>
      )}

    </div>
  );
};

export default TreeTab;