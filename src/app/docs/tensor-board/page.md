---
title: Logging and Visualization with TensorBoard
nextjs:
  metadata:
    title: TensorBoard
    description: Logging and Visualization with TensorBoard
---

# Introduction

The goal of this task is to design and implement an educational framework that enhances your understanding of machine learning (ML) concepts in the context of GIS-based crop trait analysis. The framework employs a novel, visualization-driven approach using TensorBoard to provide real-time insights into key ML processes such as data preparation, model training, feature selection, and prediction evaluation. By integrating interactive visualization tools, this task aims to bridge the gap between theoretical knowledge and practical application, making complex ML processes intuitive and engaging.

---

## Before You Begin

In this section, you will be revisiting code that you and your team utilized in sections [**one**](/docs/heatmap-generation) and [**two**](/docs/machine-learning) . The idea now is that you will be using a framework called TensorBoard. This framework employs a novel, visualization-driven approach to provide real-time insights into key ML processes such as data preparation, model training, feature selection, and prediction evaluation. By integrating interactive visualization tools, this task aims to bridge the gap between theoretical knowledge and practical application, making the complex ML processes that you have already seen, more intuitive and engaging.

To download the files needed for the section, please see below:

### Download Project Files

- Access the project files here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
- You will be looking for the folder labeled **Section 3** that contains the following: (`TensorBoard_with_QGIS_and_Python.ipynb` &
  `TensorBoard_with_Machine_Learning_Regression_Models.ipynb`), in it.
- Each of these files, is code that you have previously seen, but now with the addition of the TensorBoard framework. When you run these files, you should now see additional results, than the first time you ran the code blocks.

{% callout type="warning" title="Watch Out!" %}
Remember to update your file paths in these new files! If you do not update the file paths to your data sources, the code will not run correctly!
{% /callout %}

---

Utilizing TensorBoard with the previous sections code that we have worked with already, will help you to visualize critical aspects of ML, including loss curves, accuracy metrics, feature importance, and geospatial heatmaps. This will help enable you to understand how models learn and perform.

Feel free to rerun the previous sections codes, now with the addition of the TensorBoard framework, and see what changes you notice, and what new insights are provided.

{% callout title="You should know!" %}
The set of instructions that you see below is if you were to set up your _own_ TensorBoard project. You can find the completed code that has the addition of TensorBoard here in [section three](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3). Run the codes in your development environment to see new results!
{% /callout %}

---

## Setting Up Your Project

### Install TensorBoard and Jupyter TensorBoard

1. **Open your terminal or command prompt** (e.g., PowerShell on Windows, Terminal on macOS/Linux).

2. **Install the required packages** using pip:
   ```bash
   pip install tensorboard jupyter-tensorboard tensorboardX
   ```
