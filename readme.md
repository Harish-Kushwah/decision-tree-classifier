# Decision Tree Visualization

A web-based application to visualize and interact with decision tree classifiers. This project allows users to upload datasets, configure decision tree parameters, visualize the resulting tree, view dataset details, and learn about the underlying theory.

## Project Overview

The Decision Tree Visualization tool is designed to help users understand and work with decision tree classifiers in machine learning. It combines an intuitive frontend interface with a backend for processing datasets and generating decision trees.

### Features
- **Dataset Upload**: Supports CSV and JSON file uploads.
- **Feature Selection**: Choose features (X) and target variable (Y) from the dataset.
- **Tree Configuration**: Set parameters like max depth and criterion (Gini or Entropy).
- **Visualization**: Displays the decision tree structure.
- **Dataset Overview**: Shows basic statistics and preview of the uploaded data.
- **Theory Section**: Explains decision trees, Gini index, entropy, and related concepts.
- **Collapsible Sidebar**: Toggle sections to optimize screen space.
- **Responsive Design**: Works across desktop and mobile devices.

## Technologies Used

- **Frontend**:
  - HTML5, CSS3 (with CSS Variables)
  - JavaScript (with jQuery for DOM manipulation)
  - ECharts (for tree visualization)
- **Backend**:
  - Python 3.8+
  - Flask (web framework)
  - Pandas (data processing)
  - Scikit-learn (decision tree implementation)


### Prerequisites
- **Python 3.8+**: [Download](https://www.python.org/downloads/)
- **pip**: Python package manager
- **Node.js** (optional, for frontend development server)
- **Git**: For cloning the repository
