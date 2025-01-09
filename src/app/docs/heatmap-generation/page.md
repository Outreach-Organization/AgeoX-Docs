---
title: Analysis with QGIS and Python
nextjs:
  metadata:
    title: QGIS and Python
    description: QGIS and Python
---

# Heatmap Generation

This guide will walk you through setting up your environment, creating heatmaps with QGIS and Python, and visualizing data from our sorghum research field trials. These instructions are designed to be accessible for high school students and will help you explore geospatial data and its applications.

## <!-- ![Heatmap result image](./heatmap.png) -->

---

## Setting Up Your Project

### Download Project Files

- Access the project files here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
- Create a folder in a location you’ll remember and place all downloaded files, including the **Shapefile folder** (`plot_boundaries` files), in it.

---

### Install Required Software

#### **Install QGIS**

- Visit the [QGIS Download Page](https://qgis.org/download/) (if you have not done already).
- Choose the **Long Term Release (3.34 LTR)** version.
- Select your operating system (Windows, macOS, or Linux) and follow the installation instructions.

#### **Install Miniconda**

- Visit the [Miniconda Installation Page](https://docs.anaconda.com/miniconda/install/) (if you have not done already).
- Choose the version for your operating system (Windows or macOS/Linux) and follow the instructions.

---

### Set Up Python and Dependencies

#### **Create a Working Project Directory**

1. **Windows Users:**

   - Create a new folder and place the `env_setup.yml` file in it.

   {% callout title="You should know!" %}
   Remember, this file was downloaded from the google drive folder previously provided to you here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
   {% /callout %}

   - Open a command line application (e.g., Command Prompt or PowerShell).
   - Navigate to the folder containing `env_setup.yml`:
     ```bash
     cd C:\Path\To\Folder\Containing\YML\
     ```

2. **Mac/Linux Users:**
   - Create a new folder and place the `env_setup.yml` file in it.
   - Open a terminal application (e.g., iTerm or Terminal).
   - Navigate to the folder containing `env_setup.yml`:
     ```bash
     cd \Path\To\Folder\Containing\YML\
     ```

### Activating your environment

#### **Create and Activate Environment**

1. Run the following command to create the environment:
   ```bash
   conda env create -f env_setup.yml
   ```
2. When the installation completes:

   - Activate the environment:

     ```bash
     conda activate geo_ml_env
     ```

   - Verify the environment:
     ```bash
     conda list
     ```

#### **Set Up Jupyter Lab**

3. From the command line, run the following command to set up the Jupyter kernel:

   ```bash
   python -m ipykernel install --user
   --name=geo_ml_env --display-name "Python (geo_ml_env)
   ```

4. Launch Jupyter Lab by typing the following command in your terminal:

   ```bash
   jupyter lab
   ```

5. In the Jupyter Lab dashboard, under **Notebook**, select `Python 3 (geo_ml_env)`.

## Making the Heatmap

### Heatmap creation

#### **Generate a Heatmap Using PyQGIS**

1. With Jupyter Notebook running the `Python 3 (geo_ml_env)` kernel, open the `are_pyqgis.ipynb` notebook file.

{% callout title="You should know!" %}
Remember, this file was downloaded from the google drive folder previously provided to you here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
{% /callout %}

2. Provide values for the following string constants:

   - `CSV_IN`: Path to the `.csv` file.
   - `SHP_IN`: Path to the `.shp` file. Ensure the `plot_boundaries.shp` file is in the same folder as the other `plot_boundaries` files.
   - `PROJECT_OUT`: Output the path and filename for the generated QGIS project file (e.g., `/path/to/your/qgis_heatmap.qgs`).

   {% callout type="warning" title="Important" %}
   Make sure to include the `.qgs` extension when naming your output file.
   {% /callout %}

3. Specify the column/data name as a string for `label_name` to visualize as a heatmap.

4. Run each cell in the notebook.

{% callout title="You should know!" %}
It is common for virtual environments (like the one you are using) to sometimes crash. No need to panic! If the kernel crashes, hit "_Restart_" and run again.
{% /callout %}

### Heatmap View

#### View Heatmap in QGIS

1. Launch QGIS and select **Project → Open** to load your `.qgs` file.

2. Add the Google Satellite layer:

   - Right-click **XYZ Tiles** in the browser pane (on the left) and select **New Connection**.
   - Enter the following details:
     - **Name**: Google Satellite
     - **URL**: `http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}`
   - Click **OK**.

3. Drag and drop the newly created **Google Satellite** entry under **XYZ Tiles** into your **Layers** list.

4. Arrange the layers so that the **Google Satellite** layer is at the bottom.

{% callout title="You should know!" %}
If the heatmap is not visible, right-click the _Heatmap Layer_ and select _Zoom to Layer(s)_.
{% /callout %}
