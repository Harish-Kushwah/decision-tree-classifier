import React, { useState } from 'react';
import UploadCard from './UploadCard';
import VariablesCard from './VariablesCard';
import SettingsCard from './SettingsCard';
import LogsCard from './LogsCard';

const Sidebar = ({
  selectedFeatures , 
  setSelectedFeatures, 
  selectedTarget , 
  setSelectedTarget,
  maxDepth,
  setMaxDepth,
  criterion,
  setCriterion,
  generateTree
 }) => {
  const [columns, setColumns] = useState([]);

  return (
    <aside className="flex flex-col gap-6 p-4 bg-gray-50  h-[calc(100vh-105px)] overflow-y-auto">
      <UploadCard />
      <VariablesCard 
        columns={columns}
        selectedFeatures={selectedFeatures}
        setSelectedFeatures={setSelectedFeatures}
        selectedTarget={selectedTarget}
        setSelectedTarget={setSelectedTarget}
        setColumns={setColumns}
      />
      <SettingsCard 
         selectedFeatures={selectedFeatures}
         selectedTarget={selectedTarget}
         setSelectedFeatures={setSelectedFeatures}
         setSelectedTarget={setSelectedTarget}
         maxDepth={maxDepth}
         setMaxDepth={setMaxDepth}
         criterion={criterion}
         setCriterion={setCriterion}
         generateTree={generateTree}
      />
      {/* <LogsCard /> */}
    </aside>
  );
};

export default Sidebar;