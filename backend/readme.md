# Backend Setup for Decision Tree Visualization

This guide outlines the steps to set up a Python-based backend for the Decision Tree Visualization application using Flask. The backend will handle dataset uploads, decision tree generation, and data processing.

## Prerequisites

- **Python 3.8+**: Ensure Python is installed on your system. You can download it from [python.org](https://www.python.org/downloads/).
- **pip**: Python package manager (comes with Python).
- **Virtualenv** (optional but recommended): For creating isolated Python environments.

## Setup Instructions

### 1. Create Project Directory
```bash
mkdir decision-tree-backend
cd decision-tree-backend
```

### 2. Set Up Virtual Environment (Optional)

Copy
#### Install virtualenv if not already installed
```bash
pip install virtualenv
```

#### Create virtual environment
```bash
virtualenv venv
```

#### Activate virtual environment
##### On Windows:
```bash
venv\Scripts\activate
```

### 3. Install Required Packages
Install the necessary Python packages for the backend. Create a requirements.txt file (see below) and run:
```bash
pip install -r requirements.txt
```

### 4. Run Project
```bash
python app.py
```