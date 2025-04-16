import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

const SettingsCard = ({
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


  // const generateTree = async () => {
  //   if (!selectedFeatures.length || !selectedTarget) {
  //     console.error('Please select features and target');
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('http://127.0.0.1:5000/generate_tree', {
  //       max_depth: maxDepth ? parseInt(maxDepth) : null,
  //       criterion,
  //       features: selectedFeatures,
  //       target: [selectedTarget]
  //     });

  //     const treeData = response.data.tree_data;
  //     const chart = echarts.init(document.getElementById('treeContainer'));
  //     chart.setOption({
  //       tooltip: { trigger: 'item', triggerOn: 'mousemove' },
  //       series: [{
  //         type: "tree",
  //         name: "Decision Tree",
  //         data: [treeData],
  //         top: "5%", left: "10%", bottom: "5%", right: "10%",
  //         symbolSize: 7, layout: "orthogonal", orient: "TB",
  //         edgeShape: "polyline", edgeForkPosition: "50%",
  //         initialTreeDepth: 3, lineStyle: { width: 2 },
  //         label: { backgroundColor: "#fff", position: "top" },
  //         leaves: { label: { position: "bottom" } },
  //         emphasis: { focus: "descendant" },
  //         expandAndCollapse: true,
  //         animationDuration: 550, animationDurationUpdate: 750,
  //       }]
  //     });
  //   } catch (error) {
  //     console.error('Error generating tree:', error);
  //   }
  // };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Tree Settings</h3>
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">Max Depth:</label>
        <input 
          type="number" 
          min="1" 
          value={maxDepth}
          onChange={(e) => setMaxDepth(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">Criterion:</label>
        <select 
          value={criterion}
          onChange={(e) => setCriterion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="gini">Gini</option>
          <option value="entropy">Entropy</option>
        </select>
      </div>
      <button 
        onClick={()=>generateTree()}
        className="w-full bg-blue-500 text-white py-2 rounded-sm  hover:bg-blue-600 transition duration-300"
      >
        Generate Tree
      </button>
    </div>
  );
};

export default SettingsCard;