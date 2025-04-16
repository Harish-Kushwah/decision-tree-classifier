import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';
function App() {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedTarget, setSelectedTarget] = useState("");
  const [maxDepth, setMaxDepth] = useState("");
  const [criterion, setCriterion] = useState("gini");
  const [errorMessage, setErrorMessage] = useState({message:'',type:''});

   // Function to trigger an error (for demonstration purposes)
   const triggerNotification = (message,type) => {
    setErrorMessage({message,type});
    setTimeout(() => {
      setErrorMessage(''); // Clear the error after 5 seconds
    }, 10000);
  };


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
        target: [selectedTarget]
      });

      const treeData = response.data.tree_data;
      const chart = echarts.init(document.getElementById('treeContainer'));
      triggerNotification('Tree generated successfully...','success');

      // document.getElementById('error').innerText = 'Tree generated successfully..';
      chart.setOption({
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
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
      // document.getElementById('error').innerText = 'Unale to generate tree,try with different Features or Target variables';
      triggerNotification('Unale to generate tree,try with different Features or Target variables','error');
      // alert("Unale to generate tree,try with different Features or Target variables",error);
      console.error('Error generating tree:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[23%_77%] gap-2 p-4 ">
        <Sidebar
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
        <MainContent
          selectedFeatures={selectedFeatures}
          selectedTarget={selectedTarget}
          setSelectedFeatures={setSelectedFeatures}
          setSelectedTarget={setSelectedTarget}
          maxDepth={maxDepth}
          setMaxDepth={setMaxDepth}
          criterion={criterion}
          setCriterion={setCriterion}
          generateTree={generateTree}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
}

export default App;
