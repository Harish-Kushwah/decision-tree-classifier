async function uploadDataset() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://127.0.0.1:5000/upload_dataset", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        document.getElementById("uploadStatus").innerText =
            result.message || result.error;
    } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload dataset.");
    }
}
async function fetchColumns() {
    try {
        const response = await fetch("http://127.0.0.1:5000/dataset_overview");
        const data = await response.json();

        if (data.error) {
            alert("Error fetching dataset overview.");
            return;
        }

        let featureSelect = document.getElementById("featureSelect");
        let targetSelect = document.getElementById("targetSelect");
        featureSelect.innerHTML = "";
        targetSelect.innerHTML = "";

        data.columns.forEach(column => {
            let option = document.createElement("option");
            option.value = column;
            option.text = column;
            featureSelect.appendChild(option);
            targetSelect.appendChild(option.cloneNode(true));
        });
    } catch (error) {
        console.error("Error fetching dataset info:", error);
    }
}
async function generateTree() {
    const maxDepth = document.getElementById("maxDepth").value;
    const criterion = document.getElementById("criterion").value;
    const selectedFeatures = Array.from(document.getElementById("featureSelect").selectedOptions).map(option => option.value);
    const target = [document.getElementById("targetSelect").value];
    const logOutput = document.getElementById("logOutput");

    logOutput.innerText = "Generating decision tree...\n";

    try {

        const response = await fetch("http://127.0.0.1:5000/generate_tree", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                max_depth: maxDepth ? parseInt(maxDepth) : null,
                criterion: criterion,
                features: selectedFeatures,
                target: target
            }),
        });

        const result = await response.json();
        const treeData = result.tree_data;

        if (!treeData || treeData.error) {
            alert("Failed to generate tree: " + (treeData.error || "Unknown error"));
            return;
        }

        logOutput.innerText += "Tree generated successfully.\n";
        const chart = echarts.init(document.getElementById("treeContainer"));
        const option = {
            tooltip: { trigger: "item", triggerOn: "mousemove" },
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
        };

        chart.setOption(option);
        chart.on("click", params => {
            logOutput.innerText += `Clicked Node: ${params.data.name}\n`;
        });

        logOutput.innerText += "Tree visualization updated.\n";
    } catch (error) {
        console.error("Error generating tree:", error);
        alert("Failed to generate decision tree.");
        logOutput.innerText += "Error: Unable to generate tree.\n";
    }
}

async function fetchDatasetOverview() {

    const datasetLoadBtn = document.getElementById("dataset-load-btn")
    try {
        const response = await fetch(
            "http://127.0.0.1:5000/dataset_overview"
        );
        const data = await response.json();

        if (data.error) {
            alert("Error fetching dataset overview.");
            return;
        }

        let tableHTML =
            "<table border='1'><tr><th>Column</th><th>Data Type</th><th>Summary</th><th>Preview</th></tr>";

        for (let i = 0; i < data.columns.length; i++) {
            let columnName = data.columns[i];
            let dataType = data.data_types[i];

            // Extracting summary details (handling cases where data might be missing)
            let summaryDetails = data.summary[columnName]
                ? `Count: ${data.summary[columnName].count}`
                : "N/A";

            // Extracting preview (handling missing data)
            let previewValue =
                data.preview.length > 0 &&
                    data.preview[0][columnName] !== undefined
                    ? data.preview[0][columnName]
                    : "N/A";

            tableHTML += `<tr>
    <td>${columnName}</td>
    <td>${dataType}</td>
    <td>${summaryDetails}</td>
    <td>${previewValue}</td>
    </tr>`;
        }

        tableHTML += "</table>";

        document.getElementById("datasetInfo").innerHTML = tableHTML;
        datasetLoadBtn.innerText = "Refresh";

    } catch (error) {
        console.error("Error fetching dataset info:", error);
    }
}
