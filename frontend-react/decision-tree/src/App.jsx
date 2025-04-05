import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[23%_77%] gap-4 p-4">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;