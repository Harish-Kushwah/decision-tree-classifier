import React, { useState } from 'react';
import UploadCard from './UploadCard';
import VariablesCard from './VariablesCard';
import SettingsCard from './SettingsCard';
import LogsCard from './LogsCard';

const Sidebar = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedTarget, setSelectedTarget] = useState('');
  const [columns, setColumns] = useState([]); // Assuming columns are fetched here or passed from elsewhere

  return (
    <aside className="flex flex-col gap-4 overflow-y-auto h-full">
      <UploadCard />
      <VariablesCard 
        columns={columns}
        selectedFeatures={selectedFeatures}
        setSelectedFeatures={setSelectedFeatures}
        selectedTarget={selectedTarget}
        setSelectedTarget={setSelectedTarget}
        setColumns={setColumns} // Pass this if fetching happens in VariablesCard
      />
      <SettingsCard 
        selectedFeatures={selectedFeatures}
        selectedTarget={selectedTarget}
      />
      <LogsCard />
    </aside>
  );
};

export default Sidebar;