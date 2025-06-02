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

## Making the Heatmap

### Heatmap creation

#### **Generate and View Heatmap Using QGIS**

1. If it is not already, make sure that your QGIS software that you downloaded previously, is open and running!

2. Select `Plugins` from the toolbar, and choose `Python Console` from the dropdown menu.

   ![Finding the Plugins tab](/images/QGIS/QGIS1.webp)

3. Within the Python Console, choose `Show Editor`.

   ![Finding the Show Editor button](/images/QGIS/QGIS2.webp)

4. Within the newly opened Python Editor, choose `Open Script...` and select the `are_pyqgis.py` script from the Project Files downloaded.

   ![Finding the Open Script button](/images/QGIS/QGIS3.webp)

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

   ![Finding the Run Script button](/images/QGIS/QGIS4.webp)

9. Awesome! If you have made it this far, you should now see the heatmap and plot outline appear in the QGIS view. The following is what a successful heatmap generation should look like:

   ![Successfully Generated Heatmap image](/images/QGIS/heatmap_before_satellite_layer.webp)

#### **Troubleshooting tips**

1. If any files are `not found`, check your paths and try again. Use [absolute paths](https://www.redhat.com/en/blog/linux-path-absolute-relative) if necessary.

2. If the software crashes, you may need to start from the beginning as sometimes progress does not save.

{% callout title="You should know!" %}
It is common for software applications (like the one you are using) to sometimes crash. No need to panic!
{% /callout %}

### Satellite Layer

#### Add Google Satellite Layer

1. Add the Google Satellite layer by right-clicking `XYZ Tiles` located in the browser at left, and choose `New Connection...`.

   ![Finding the XYZ Tiles tab, to then find the New Connection button](/images/QGIS/QGIS5.webp)

2. Enter the following details:

   - **Name**: Google Satellite
   - **URL**: `http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}`
   - Click **OK**.

3. Under **XYZ Tiles**, find your newly created **Google Satellite** entry and drag-drop it into your `Layers` list. Rearrange the layers so that the **Google Satellite** layer is at the _very bottom_.

   ![Dragging the Google Satellite tab to the Layers tab](/images/QGIS/QGIS6.webp)

4. You should now see your heatmap rendered with real imagery from the satellite view. Great job!

![Successfully Generated Heatmap image](/images/QGIS/heatmap_after_satelitte_layer.webp)

{% callout title="You should know!" %}
If the heatmap is not visible, right-click the _Heatmap Layer_ and select `_Zoom to Layer(s)_`.
![Dragging the Google Satellite tab to the Layers tab](/images/QGIS/QGIS7.webp)
{% /callout %}

And that is it! Congrats on successfully creating your first map using real data from our field trials, to visual it using heatmaps and QGIS!

## Further Learning

### Now You Know

So you have generated your heatmap, now what? You are probably thinking, why was this important and how are heatmaps relevant? Lets find out...

### Analyzing the heatmap

In QGIS, a "layer" represents data that you include in your QGIS Project. The data can take various forms, such as **Raster** (image), **Vector** (points, lines, shapes), and **Mesh** (a grid of data points) layers. In this case, the Google Satellite Layer is a _tiled Raster layer_ which pulls its image data from Google satellite photos. The order of the layers determines the order that items are visually rendered to the screen, one on top of the other. You can think of the list of layers like a stack, where the layer at the bottom is placed first, and the layer at top is placed last.

### Why Heatmaps are Important

Heatmaps turn data into visual insights! A heatmap is a useful way to visualize the location and intensity (or density) of data points. Our heatmap uses a gradient of colors, ranging from low (Green) to high, (Red) which represents a normalized extent of values tied to the individual data points. In our case, the locations and value of the data points are derived from the location and output readings of the installed soil sensors. A very specific example to get the point across would be the following:

Example:

_You have moisture data from a field, collected from sensors scattered across the field. You are asked to map this moisture data, so the farmer knows where the most wet portions of his field are.
After collecting your moisture data, analyzing it, and generating a heatmap, you see there is a large red section in the middle of your generated heatmap. You now would be able use your findings to show your farmer that he has a portion of his field that collects more water than the other parts of his field. You would now tell him to not plant a crop there that does not do well in standing water._

Pretty cool huh!

### How Heatmaps and Machine Learning Relates

In the next section, you will be moving on to **Machine Learning**. Don't let the word scare you! We will break it down more soon. You might be wondering:

"_Why is the soil sensor heatmap needed in relation to the Machine Learning section?_"

The soil sensor heatmap is essential for both the analysis and interpretation of the Machine Learning (ML) models, as it visualizes spatial and temporal variability in key environmental variables, such as soil moisture, soil temperature, electrical conductivity, air temperature, humidity, pressure, and light, across the sorghum field. These sensor-derived factors significantly influence plant growth and trait expression, making them critical inputs for the ML models (e.g., PLS, XGB, etc.) used to predict sorghum traits. Incorporating this heatmap data enables the models to account for field-level heterogeneity and genotype-by-environment interactions, improving prediction accuracy and model robustness.

Furthermore, interpreting the heatmaps helps assess the degree of environmental variation across field plots, offering insights into how well the models generalize under diverse conditions. This is an important consideration for reliable future predictions!

## Learning Resources

Want to learn more? Checkout the links below!

- Check out this live example of drought throughout the United States being visualized using heatmaps:
  [Drought Visualized](https://www.drought.gov/topics/soil-moisture)

- If you want to see other types of heatmaps that can be generated, visit this website here: [A Complete Guide to Heatmaps](https://www.croptracker.com/blog/what-is-machine-learning-how-will-it-benefit-agriculture.html)

- Please visit this source if you want to know more about interpreting heatmaps: [How to Interpret a Heatmap](https://mouseflow.com/blog/how-to-interpret-a-heatmap/)

### Glossary

**Identified Keywords**

- Heatmap
- QGIS
- Python
- Shapefile
- CSV
- Raster
- Vector
- Mesh
- Layer
- XYZ Tiles
- Satellite Layer
- Geospatial Data
- Gradient
- Data Points
- Absolute Path

---

**Definitions**

- **Heatmap**: A two-dimensional data visualization in which individual values are represented as colors. In this context, it shows spatial intensity or density of sensor measurements over a mapped area.

- **QGIS**: An open-source Geographic Information System application used to view, edit, and analyze geospatial data. It provides tools (e.g., Plugins, Python Console) to generate maps and perform spatial analyses.

- **Python**: A high-level programming language used here to script QGIS operations (via the Python Console) and automate heatmap creation from field sensor data.

- **Shapefile**: A popular vector data format for geographic information system (GIS) software. A “Shapefile folder” typically contains several related files (.shp, .shx, .dbf, etc.) that together define map features such as plot boundaries.

- **CSV**: Short for “Comma-Separated Values,” a plain-text file format where each line is a record and each field is separated by a comma. In this guide, `field_sensor_data.csv` holds tabular sensor readings and timestamps.

- **Raster**: A grid‐based data layer in which each cell (pixel) holds a value—often used for imagery (satellite photos) or heat intensity. QGIS treats satellite imagery as a tiled Raster layer.

- **Vector**: A GIS data type that represents features as points, lines, or polygons. For example, the `plot_boundaries.shp` shapefile is a Vector layer defining each plot’s polygon outline.

- **Mesh**: A grid of data points connected in rows and columns, used to represent six-degree-of-freedom surfaces or 3D models. QGIS supports Mesh layers for advanced visualization (though this guide focuses on Raster and Vector).

- **Layer**: A single dataset in QGIS (e.g., a Raster layer, a Vector layer, or a Mesh layer). Layers are stacked in order of rendering—bottom layers draw first, top layers draw last.

- **XYZ Tiles**: A mechanism for adding web-based tiled imagery in QGIS. Each tile is requested by X, Y, and Z (zoom) coordinates from a remote server (e.g., Google Satellite).

- **Satellite Layer**: A Raster layer sourced from satellite imagery (e.g., Google Satellite). It provides a real-world background, over which the heatmap is rendered.

- **Geospatial Data**: Any data that is associated with specific geographic coordinates. In this guide, sensor readings are georeferenced by latitude/longitude and then visualized on a map.

- **Gradient**: A color ramp (from low to high values) used in a heatmap. Commonly, green indicates low intensity and red indicates high intensity, representing normalized sensor values.

- **Data Points**: Individual sensor measurements (e.g., soil moisture at a particular location and time). When plotted, each data point contributes to the overall heatmap density.

- **Absolute Path**: The full file path from the root of the filesystem (e.g., `C:\Code\field_sensor_data.csv` or `/home/user/project/field_sensor_data.csv`). Using absolute paths ensures QGIS can locate files unambiguously.
