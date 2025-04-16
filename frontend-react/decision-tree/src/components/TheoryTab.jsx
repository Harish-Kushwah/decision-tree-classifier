import React from 'react';

const TheoryTab = () => {
  return (
    <div className="h-full overflow-y-auto p-4">
      {/* What is a Decision Tree */}
      <section className="mb-6">
        <h3 className="text-xl text-green-600 mb-2">What is a Decision Tree?</h3>
        <p>
          A decision tree is a flowchart-like structure used for decision-making and predictive modeling. 
          It splits data into branches based on feature values, leading to a final decision or prediction. 
          Decision trees are widely used in machine learning for classification and regression tasks.
        </p>
      </section>

      {/* Gini Index */}
      <section className="mb-6">
        <h3 className="text-xl text-green-600 mb-2">Gini Index</h3>
        <p>
          The Gini Index (or Gini Impurity) measures the impurity or purity of a dataset. 
          It is used to evaluate splits in the dataset during the construction of a decision tree.
        </p>
        <pre className="bg-gray-100 p-2 rounded">Gini = 1 - Σ(pᵢ)²</pre>
      </section>

      {/* Entropy and Information Gain */}
      <section className="mb-6">
        <h3 className="text-xl text-green-600 mb-2">Entropy and Information Gain</h3>
        <p>
          Entropy is a measure of uncertainty or randomness in a dataset. It is used to determine the 
          homogeneity of a dataset. Information Gain is the reduction in entropy after a dataset is split 
          on a feature. It helps in selecting the best feature for splitting.
        </p>
        <pre className="bg-gray-100 p-2 rounded">
          Entropy = -Σ(pᵢ * log₂(pᵢ)){"\n"}
          Information Gain = Entropy(parent) - Weighted Average(Entropy(children))
        </pre>
      </section>

      {/* Overfitting in Decision Trees */}
      <section className="mb-6">
        <h3 className="text-xl text-green-600 mb-2">Overfitting in Decision Trees</h3>
        <p>
          Overfitting occurs when a decision tree becomes too complex and captures noise in the data instead 
          of the underlying pattern. This can lead to poor performance on unseen data. Techniques like pruning, 
          limiting tree depth, and using a minimum number of samples per leaf can help reduce overfitting.
        </p>
      </section>

      {/* Advantages of Decision Trees */}
      <section className="mb-6">
        <h3 className="text-xl text-green-600 mb-2">Advantages of Decision Trees</h3>
        <ul className="list-disc list-inside">
          <li>Easy to understand and interpret.</li>
          <li>Handles both numerical and categorical data.</li>
          <li>Requires little data preprocessing.</li>
          <li>Can model non-linear relationships.</li>
        </ul>
      </section>

      {/* Limitations of Decision Trees */}
      <section className="mb-6">
        <h3 className="text-xl text-green-600 mb-2">Limitations of Decision Trees</h3>
        <ul className="list-disc list-inside">
          <li>Prone to overfitting if not properly pruned.</li>
          <li>Can be unstable with small changes in data.</li>
          <li>Biased towards features with more levels.</li>
          <li>May not perform well with imbalanced datasets.</li>
        </ul>
      </section>

      {/* Applications of Decision Trees */}
      <section className="mb-6">
        <h3 className="text-xl text-green-600 mb-2">Applications of Decision Trees</h3>
        <ul className="list-disc list-inside">
          <li>Medical diagnosis and treatment planning.</li>
          <li>Customer segmentation and targeting in marketing.</li>
          <li>Credit risk assessment in finance.</li>
          <li>Predictive maintenance in manufacturing.</li>
        </ul>
      </section>
    </div>
  );
};

export default TheoryTab;