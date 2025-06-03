---
title: Getting Started
nextjs:
  metadata:
    title: Getting Started
    description: Introduction to the Geospatial and Machine Learning Project.
---

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Step-by-step guide to setting up your project and installing the needed dependencies." /%}

{% quick-link title="Concepts guide" icon="presets" href="docs/understanding-geospatial-science" description="Explore geospatial concepts, their applications, and their role in modern science." /%}

{% quick-link title="Begin Project" icon="plugins" href="/docs/heatmap-generation" description="Jump right in, and begin your project! There are three sections to complete." /%}

{% quick-link title="Contributing" icon="theming" href="/docs/how-to-contribute" description="Contribute ideas, modules, and suggestions to improve our learning materials." /%}

{% /quick-links %}

---

# Introduction

Welcome to our Geospatial Science learning project! We have created this guide that will help students like you to set up your learning environments, create heatmaps using **QGIS** (_a geospatial data software_) and **Python** (_a popular programming language_), and visualize sorghum research field trial data while developing data science and **machine learning** skills. We’ll walk you through how to build a predictive model for important plant traits (e.g., yield, seed protein content, and chlorophyll a fluorescence) using data from drones, field instruments, technicians, and climate records.

{% callout title="You should know!" %}
Machine learning is a branch of artificial intelligence that enables computers to automatically learn patterns and make predictions or decisions from data without being explicitly programmed.
{% /callout %}

You’ll also learn to track and interpret metrics such as preprocessing steps, hyperparameter tuning, and feature importance, by installing and using the visualization tool **TensorBoard**. By following these instructions, you’ll be prepared to analyze geospatial data and apply machine learning techniques to understand plant performance more effectively.

---

## Before You Begin

Make sure that before you begin the lessons, you form teams of 2-4 students and inform your educator of your team name! This is an important step because there is a competition at the end of the project to see who can produce a model with the highest accuracy. Good luck!

---

## What You Will Learn

1. **Geospatial Concepts**: Understand the fundamentals of geospatial data, Geographic Information Systems (**GIS**), and their applications.
2. **Data Preparation**: Learn how to clean and preprocess data for analysis.
3. **Modeling and Predictions**: Using machine learning, implement and evaluate regression models to predict plant traits like yield or protein content.
4. **Tool Proficiency**: Gain hands-on experience with tools like JupyterLab, Google Colab, and programming libraries in Python.

{% callout title="You should know!" %}
Understanding geospatial concepts requires curiosity and patience. Don’t hesitate to revisit fundamental topics if you feel stuck. Please reach out to our lab, or even visit popular code forums like [Stack Overflow](https://stackoverflow.com/questions) to have your questions answered in depth!
{% /callout %}

---

## Prerequisites

Before starting this project, ensure you have access to the following:

### Tools and Software

- **Python (3.9 or higher)**: Programming language for coding the project.
- **Google Colab or JupyterLab**: Platforms for running Python scripts and notebooks.
- **Excel or CSV Editor**: To view and manage data files.

### Required Libraries

You will need the following Python libraries:

- pandas
- numpy
- scikit-learn
- matplotlib
- openpyxl

If you are unsure how to install these, don’t worry. Detailed setup instructions are provided in the specific sections for JupyterLab and Google Colab.

{% callout type="warning" title="Watch Out!" %}
Ensure all required libraries are installed before proceeding. Missing dependencies can cause errors that are often hard to debug.
{% /callout %}

---

## Project Overview

This project focuses on:

- **Setting up your environment** for data analysis, creating heatmaps with QGIS and Python, and visualizing sorghum field trial data.
- **Developing a predictive model** to estimate plant traits—such as yield, protein content, or chlorophyll fluorescence—using data from drones, field instruments, technicians, and climate records.
- **Installing and using TensorBoard** to log, track, and visualize various metrics (e.g., preprocessing steps, hyperparameter tuning, and feature importance) throughout the modeling process.

### Data Sources

You will work with:

- Wireless sensor data
- Climate data
- Field technician observations
- Crop data

### Models

The project includes six pre-implemented regression models:

- Partial Least Squares Regression (PLS)
- Lasso Regression
- ElasticNet Regression
- Bayesian Ridge Regression
- Extreme Gradient Boosting (XGBoost)
- Support Vector Regression (SVR)

You are encouraged to explore these models and even implement your own, such as Random Forest or Linear Regression.

---

## Quick Start

Already familiar with development environments like Google Colab and JupyterLab? Great! Use the exercises below to refresh your skills and get hands-on practice with these tools. These mini-tasks will help you set up your environment and ensure everything is ready for the project.

### Google Colab

1. Open [Google Colab](https://colab.research.google.com).
2. Install required libraries using:
   ```python
   !pip install pandas numpy scikit-learn matplotlib openpyxl
   ```
3. Upload your dataset and start coding!

### JupyterLab

1. Install JupyterLab using:
   ```bash
   pip install jupyterlab
   ```
2. Set up your environment by installing the required libraries:
   ```bash
   pip install pandas numpy scikit-learn matplotlib openpyxl
   ```
3. Open JupyterLab and create a new notebook for the project.

{% callout title="You should know!" %}
Google Colab is a cloud-based platform, so you don’t need to worry about local installations. It’s perfect for beginners!
{% /callout %}

---

## Tips for Success

- **Read the Instructions**: Carefully follow the guides for setting up and running the code.
- **Stay Organized**: Keep your data, scripts, and results in a well-structured directory.
- **Experiment**: Don’t hesitate to tweak model parameters and explore alternative approaches.
- **Ask for Help**: Reach out to your instructor or peers if you encounter challenges.

---

## Getting Help

If you encounter challenges or have questions, there are several resources to support you:

- **Ask Your Instructor**: Your teacher is there to help clarify instructions and troubleshoot issues.
- **Google It**: Use search engines to look up terms or code that you find challenging.
- **Review Documentation**: Refer to this guide or library-specific documentation for deeper insights.

{% callout title="You should know!" %}
Learning is a process. Asking for help and using resources effectively are important parts of that process!
{% /callout %}

---

## Submitting an Issue

If you find an issue with the project or need further assistance, feel free to reach out to the lab directly:

- Email: [shakoorlab.danforth@gmail.com](mailto:shakoorlab.danforth@gmail.com)

We appreciate your feedback and will do our best to assist you promptly!
