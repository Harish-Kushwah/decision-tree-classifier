import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Make sure to add your logo file

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="px-4 py-2 shadow-header bg-white">
        <h1 className="text-2xl text-secondary-text font-semibold">Decision Tree Visualizer</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary-text mb-4">
            Learn and Explore Decision Trees
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how decision trees work, visualize their structure, and experiment with your own datasets in our interactive playground.
          </p>
          <button
            onClick={() => navigate('/playground')}
            className="mt-6 bg-primary text-white px-6 py-3 rounded-sm hover:bg-primary-hover transition-colors duration-300 text-lg font-medium"
          >
            Go to Playground
          </button>
        </section>

        {/* Information Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">What is a Decision Tree?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-700 mb-4">
                A decision tree is a powerful machine learning algorithm used for both classification and regression tasks. It works by recursively splitting the input space into regions based on feature values, creating a tree-like structure of decisions.
              </p>
              <p className="text-gray-700">
                Key concepts include:
                <ul className="list-disc list-inside mt-2">
                  <li><strong>Gini Index:</strong> Measures impurity in a dataset</li>
                  <li><strong>Entropy:</strong> Quantifies uncertainty</li>
                  <li><strong>Information Gain:</strong> Determines the best split</li>
                </ul>
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src={logo}
                alt="Decision Tree Diagram" 
                className="rounded-md shadow-card"
              />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Learn with Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white shadow-card rounded-sm p-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/7VeUPuFGJHk"
                title="Decision Trees Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
              <h4 className="text-lg font-medium text-secondary-text mt-2">Decision Trees Basics</h4>
              <p className="text-sm text-gray-600">A beginner-friendly introduction to decision trees.</p>
            </div>
            <div className="bg-white shadow-card rounded-sm p-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/7VeUPuFGJHk"
                title="How Decision Trees Work"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
              <h4 className="text-lg font-medium text-secondary-text mt-2">How Decision Trees Work</h4>
              <p className="text-sm text-gray-600">Detailed explanation of the algorithm.</p>
            </div>
            <div className="bg-white shadow-card rounded-sm p-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/7VeUPuFGJHk"
                title="Decision Trees in Practice"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
              <h4 className="text-lg font-medium text-secondary-text mt-2">Practical Applications</h4>
              <p className="text-sm text-gray-600">Real-world examples of decision trees.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 text-center text-gray-600">
        <p>© 2025 Decision Tree Visualizer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;