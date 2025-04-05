import React, { useState } from 'react';

const LogsCard = () => {
  const [logs, setLogs] = useState('');

  // You can update logs from other components using a context or prop drilling
  return (
    <div className="bg-white shadow-md p-4">
      <h3 className="text-lg text-gray-700 cursor-pointer">Logs</h3>
      <pre className="mt-2 bg-gray-100 p-4 h-48 overflow-auto font-mono text-sm">
        {logs}
      </pre>
    </div>
  );
};

export default LogsCard;