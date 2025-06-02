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

- Before you begin, download the project files located here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
- Create a folder in a location you’ll remember and place all downloaded files, including the **Shapefile folder** (`plot_boundaries` files), in it.

---

### Install Required Software

#### **Install QGIS**

- Visit the [QGIS Download Page](https://qgis.org/download/) (if you have not done already).
- Choose the **Long Term Release (3.34 LTR)** version.
- Select your operating system (Windows, macOS, or Linux) and follow the installation instructions.
- When QGIS is installed, be sure to have the program running before you continue in the _Heatmap Creation_ section.

<!-- #### **Install Miniconda**

- Visit the [Miniconda Installation Page](https://docs.anaconda.com/miniconda/install/) (if you have not done already).
- Choose the version for your operating system (Windows or macOS/Linux) and follow the instructions.

--- -->

<!-- ### Set Up Python and Dependencies

#### **Create a Working Project Directory**

1. **Windows Users:**

   - Create a new folder and place the `env_setup.yml` file in it.

   {% callout title="You should know!" %}
   Remember, this file was downloaded from the google drive folder previously provided to you here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
   {% /callout %}

   - Create a new folder and place the `env_setup.yml` file in it.
   - Open the Anaconda command line application (Anaconda PowerShell).
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

1. While in the same directory (_folder_) of your env_setup.yml file, run the following command to create the environment:
   ```bash
   conda env create -f env_setup.yml
   ```
2. When the installation completes:

   - Verify the environment was created:

     ```bash
     conda env list
     ```

   - Activate the environment:

     ```bash
     conda activate geo_ml_env
     ```

   - View your environment's packages (that were installed using the _**env_setup.yml**_ file):
     ```bash
     conda list
     ``` -->

<!-- #### **Install and Setup VS Code**

1. Visit the [Visual Studio Code](https://code.visualstudio.com/) webpage (if you have not done so already).

{% callout type="warning" title="Watch Out!" %}
Please do not get _Visual Studio Code_ and _Visual Studio_ confused when you go to download the program! (Confusing, we know!) They are each their own program. You are looking for Visual Studio _`Code`_.
{% /callout %}

2. Download the installer provided for your Operating System (_Mac/Windows_).

3. After installing, launch VS Code.

{% callout title="You should know!" %}
Launching the application might take a moment as it is a big program. Do not worry if it takes a minute or more to open for you.
{% /callout %}

4. In your newly opened Visual Studio code window, navigate to the Extensions tab (`View` -> `Extensions`).

5. Search for and install the following extensions:

   ```bash
   'Python'
   'Jupyter'
   ```

6. You should now have the following in your Extensions list under `Installed`:
   ```bash
   'Jupyter Slide Show'
   'Jupyter Notebook Renderers'
   'Jupyter Keymap'
   'Jupyter Cell Tags'
   'Jupyter'
   'Python Debugger'
   'Python'
   'Pylance'
   ```
   {% callout title="You should know!" %}
   Navigating Visual Studio code for the first time can be tricky! If you need help with shortcuts, visit their documentation page, or visit their [Getting Started](https://code.visualstudio.com/docs/getstarted/keybindings) page.
   {% /callout %} -->

## Making the Heatmap

### Heatmap creation

#### **Generate and View Heatmap Using QGIS**

1. If it is not already, make sure that your QGIS software that you downloaded previously, is open and running!

2. Select `Plugins` from the toolbar, and choose `Python Console` from the dropdown menu.

   ![Finding the Plugins tab](/images/QGIS/QGIS1.png)

3. Within the Python Console, choose `Show Editor`.

   ![Finding the Show Editor button](/images/QGIS/QGIS2.png)

4. Within the newly opened Python Editor, choose `Open Script...` and select the `are_pyqgis.py` script from the Project Files downloaded.

   ![Finding the Open Script button](/images/QGIS/QGIS3.png)

{% callout title="You should know!" %}
Remember, the needed files were downloaded from the google drive folder previously provided to you here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
{% /callout %}

5. With the script opened, provide for string constants **_CSV_IN_**, **_SHP_IN_**, and **_PROJECT_OUT_** at lines 23, 24, and 25.

   - `CSV_IN`: Path to the `field_sensor_data.csv` file.
   - `SHP_IN`: Path to the `plot_boundaries.shp` file. Ensure this file is in the same folder as the other `plot_boundaries` files (_this is very important!_).
   - `PROJECT_OUT`: Output the path and filename for the generated QGIS project file (e.g., `/path/to/your/qgis_heatmap.qgs`), making sure to include the `.qgs` extension on the filename.

   {% callout type="warning" title="Important!" %}
   You can right-click a file in the Explorer tab and choose `Copy Path` to get its file path, to use in the above step. Paste this into the quotes for each.
   {% /callout %}

   Example:

   ```bash
   CSV_IN = r"<paste_path_here>.
   ```

   If your file path is `C:\Code\field_sensor_data.csv` then your assignment will look like::

   ```bash
   CSV_IN = r"C:\Code\field_sensor_data.csv"`
   ```

6. Provide `date_start` and `date_end` for the date range you wish to view ( _see the commented section beginning at line 27_ ).

   - OPTIONALLY: Instead of a range, provide a list of dates at line 36 variable '**dates**'.

   Example:

   ```bash
   dates = ["2023-08-03", "2023-08-05", "2023-08-07"]
   ```

7. Provide the column name for the `label_name` variable for the data you wish to view as a heatmap at line 39. This refers to the column/header names within the `field_sensor_data.csv` file.

8. Click the `Run Script` at the top of the Python Editor to execute the script!

   ![Finding the Run Script button](/images/QGIS/QGIS4.png)

9. Awesome! If you have made it this far, you should now see the heatmap and plot outline appear in the QGIS view. The following is what a successful heatmap generation should look like:

   ![Successfully Generated Heatmap image](/images/QGIS/heatmap.png)

#### **Troubleshooting tips**

1. If any files are `not found`, check your paths and try again. Use [absolute paths](https://www.redhat.com/en/blog/linux-path-absolute-relative) if necessary.

2. If the software crashes, you may need to start from the beginning as sometimes progress does not save.

{% callout title="You should know!" %}
It is common for software applications (like the one you are using) to sometimes crash. No need to panic!
{% /callout %}

### Satellite Layer

#### Add Google Satellite Layer

1. Add the Google Satellite layer by right-clicking `XYZ Tiles` located in the browser at left, and choose `New Connection...`.

   ![Finding the XYZ Tiles tab, to then find the New Connection button](/images/QGIS/QGIS5.png)

2. Enter the following details:

   - **Name**: Google Satellite
   - **URL**: `http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}`
   - Click **OK**.

3. Under **XYZ Tiles**, find your newly created **Google Satellite** entry and drag-drop it into your `Layers` list.

   ![Dragging the Google Satellite tab to the Layers tab](/images/QGIS/QGIS6.png)

4. Rearrange the layers so that the **Google Satellite** layer is at the _very bottom_.

{% callout title="You should know!" %}
If the heatmap is not visible, right-click the _Heatmap Layer_ and select `_Zoom to Layer(s)_`.
![Dragging the Google Satellite tab to the Layers tab](/images/QGIS/QGIS7.png)
{% /callout %}

And that is it! Congrats on successfully creating your first map using real data from our field trials, to visual it using heatmaps and QGIS!
