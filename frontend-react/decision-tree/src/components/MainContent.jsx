import React, { useState } from 'react';
import TreeTab from './TreeTab';
import DatasetTab from './DatasetTab';
import TheoryTab from './TheoryTab';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('tree');

  return (
    <section className="flex flex-col h-full p-2">
      <div className="flex w-1/2 bg-white border-b">
        <button 
          className={`p-4 ${activeTab === 'tree' ? 'border-b-2 border-green-600 text-gray-800' : 'text-gray-600'}`}
          onClick={() => setActiveTab('tree')}
        >
          Decision Tree
        </button>
        <button 
          className={`p-4 ${activeTab === 'dataset' ? 'border-b-2 border-green-600 text-gray-800' : 'text-gray-600'}`}
          onClick={() => setActiveTab('dataset')}
        >
          Dataset Overview
        </button>
        <button 
          className={`p-4 ${activeTab === 'theory' ? 'border-b-2 border-green-600 text-gray-800' : 'text-gray-600'}`}
          onClick={() => setActiveTab('theory')}
        >
          Theory
        </button>
      </div>
      <div className="flex-1 bg-white shadow-md p-4 mt-2 overflow-auto">
        {activeTab === 'tree' && <TreeTab />}
        {activeTab === 'dataset' && <DatasetTab />}
        {activeTab === 'theory' && <TheoryTab />}
      </div>
    </section>
  );
};

export default MainContent;