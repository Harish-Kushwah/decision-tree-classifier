import React, { useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

const SettingsCard = ({ selectedFeatures, selectedTarget }) => {
  const [maxDepth, setMaxDepth] = useState('');
  const [criterion, setCriterion] = useState('gini');

  const generateTree = async () => {
    if (!selectedFeatures.length || !selectedTarget) {
      console.error('Please select features and target');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/generate_tree', {
        max_depth: maxDepth ? parseInt(maxDepth) : null,
        criterion,
        features: selectedFeatures,
        target: [selectedTarget] // Keeping it as an array as per the original API
      });

      const treeData = response.data.tree_data;
      const chart = echarts.init(document.getElementById('treeContainer'));
      chart.setOption({
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        // series: [{
        //   type: 'tree',
        //   data: [treeData],
        //   top: '5%',
        //   left: '10%',
        //   bottom: '5%',
        //   right: '10%',
        //   symbolSize: 7,
        //   layout: 'orthogonal',
        //   orient: 'TB',
        //   label: { position: 'top', backgroundColor: '#fff' }
        // }]
        series: [{
          type: "tree",
          name: "Decision Tree",
          data: [treeData],
          top: "5%", left: "10%", bottom: "5%", right: "10%",
          symbolSize: 7, layout: "orthogonal", orient: "TB",
          edgeShape: "polyline", edgeForkPosition: "50%",
          initialTreeDepth: 3, lineStyle: { width: 2 },
          label: { backgroundColor: "#fff", position: "top" },
          leaves: { label: { position: "bottom" } },
          emphasis: { focus: "descendant" },
          expandAndCollapse: true,
          animationDuration: 550, animationDurationUpdate: 750,
      }]
      });
    } catch (error) {
      console.error('Error generating tree:', error);
    }
  };

  return (
    <div className="bg-white shadow-card p-4 rounded-sm">
      <h3 className="text-lg text-secondary-text font-medium cursor-pointer mb-2">Tree Settings</h3>
      <div>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-gray-700">Max Depth:</label>
          <input 
            type="number" 
            min="1" 
            value={maxDepth}
            onChange={(e) => setMaxDepth(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-sm text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-gray-700">Criterion:</label>
          <select 
            value={criterion}
            onChange={(e) => setCriterion(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-sm text-sm"
          >
            <option value="gini">Gini</option>
            <option value="entropy">Entropy</option>
          </select>
        </div>
        <button 
          onClick={generateTree}
          className="w-full bg-primary text-white p-2 rounded-sm hover:bg-primary-hover transition-colors duration-300"
        >
          Generate Tree
        </button>
      </div>
    </div>
  );
};

export default SettingsCard;