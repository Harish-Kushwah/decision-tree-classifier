import React from 'react';

const TheoryTab = () => {
  return (
    <div className="h-full overflow-y-auto">
      <section className="mb-4">
        <h3 className="text-xl text-green-600 mb-2">What is a Decision Tree?</h3>
        <p>A decision tree is a flowchart-like representation of decisions and their possible consequences...</p>
      </section>
      <section className="mb-4">
        <h3 className="text-xl text-green-600 mb-2">Gini Index</h3>
        <p>The Gini Index (or Gini Impurity) measures the impurity or purity of a dataset...</p>
        <pre className="bg-gray-100 p-2 rounded">Gini = 1 - Σ(pᵢ)²</pre>
      </section>
      {/* Add other sections similarly */}
    </div>
  );
};

export default TheoryTab;