from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier, _tree
import chardet
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.tree import export_graphviz
from six import StringIO
from IPython.display import Image  

import matplotlib.pyplot as plt
from sklearn.tree import plot_tree


app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

# Load dataset globally
dataset_path = "./dataset/WineQT.csv"
dataset = pd.read_csv(dataset_path)
def get_status(probs):
    """
    Determine the status based on probabilities.
    """
    labels = ["Good", "Average", "Bad"]  # Example labels for multiple classes
    status = []
    for i, prob in enumerate(probs):
        if prob > 0.5:  # Threshold for determining the dominant class
            status.append(f"{labels[i%3]} ({prob:.2%})")
    return ", ".join(status) if status else "Uncertain"

def build_tree_dict(tree, feature_names, node=0):
    """
    Recursively build a dictionary representation of the decision tree.
    """
    tree_ = tree.tree_
    if tree_.feature[node] != _tree.TREE_UNDEFINED:
        feature_name = feature_names[tree_.feature[node]]
        threshold = tree_.threshold[node]
        return {
            "name": f"{feature_name} <= {threshold:.2f}",
            "children": [
                build_tree_dict(tree, feature_names, tree_.children_left[node]),
                build_tree_dict(tree, feature_names, tree_.children_right[node])
            ]
        }
    else:
        value = tree_.value[node][0]
        total = sum(value)
        probs = [v / total for v in value] if total > 0 else [0] * len(value)
        return {
            "name": f"Quality: {get_status(probs)}",
        }
        
@app.route('/generate_tree', methods=['POST'])
def generate_tree():
    global dataset
    if dataset is None:
        return jsonify({"error": "No dataset uploaded"}), 400
    data = request.json
    max_depth = data.get("max_depth", None)
    criterion = data.get("criterion", "gini")
    X_columns = data.get("features", [])  # List of feature columns
    y_column = data.get("target", None)  # Target variable column

    # Validate user input
    if not X_columns or not y_column:
        return jsonify({"error": "Please provide valid X_columns and y_column"}), 400

    if not set(X_columns).issubset(dataset.columns):
        return jsonify({"error": "Some X_columns do not exist in dataset"}), 400

    if not set(y_column).issubset(dataset.columns):
        return jsonify({"error": "y_column does not exist in dataset"}), 400

    # Selecting X (features) and y (target)
    X = dataset[X_columns]
    y = dataset[y_column[0]]
    
    print(X)
    print(y)

    clf = DecisionTreeClassifier(max_depth=max_depth,min_samples_split=5, criterion=criterion)
    clf.fit(X, y)

    tree_json = build_tree_dict(clf, X.columns.tolist())

    return jsonify({"tree_data": tree_json})

@app.route('/upload_dataset', methods=['POST'])
def upload_dataset():
    global dataset
    
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['file']

    try:
        # Detect encoding from a sample of the file
        raw_data = file.read(10000)  # Read a small portion of the file
        detected_encoding = chardet.detect(raw_data)['encoding']
        
        # Reset file pointer after reading for encoding detection
        file.seek(0)

        if file.filename.endswith('.csv'):
            dataset = pd.read_csv(file, encoding=detected_encoding)
        elif file.filename.endswith('.json'):
            dataset = pd.read_json(file)
        else:
            return jsonify({"error": "Unsupported file format"}), 400

        # Clean dataset: Remove non-ASCII characters and drop NaN rows
        dataset = dataset.dropna().astype(str).map(lambda x: ''.join(c for c in x if ord(c) < 128))

        return jsonify({"message": "Dataset uploaded successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/dataset_overview', methods=['GET'])
def dataset_overview():
    global dataset
    
    if dataset is None:
        return jsonify({"error": "No dataset uploaded"}), 400
    
    overview = {
        "columns": dataset.columns.tolist(),
        "data_types": dataset.dtypes.astype(str).tolist(),
        "summary": dataset.describe().to_dict(),
        "preview": dataset.head().to_dict(orient="records")
    }
    
    return jsonify(overview)

if __name__ == '__main__':
    app.run(debug=True)
