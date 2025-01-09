---
title: Installation
nextjs:
  metadata:
    title: Installation
    description: Guide to setting up your environment for the Geospatial and Machine Learning portions of the project.
---

# Installation Guide

This guide will walk you through the installation and setup process to ensure you are ready to start working on the Geospatial and Machine Learning portions of this project. Follow the steps below carefully, as you are able to use either Google Colab or JupyterLab as your development environment. The choice is yours!

---

## Install Required Software

#### **Install QGIS**

- Visit the [QGIS Download Page](https://qgis.org/download/) (if you have not done already).
- Choose the **Long Term Release (3.34 LTR)** version.
- Select your operating system (Windows, macOS, or Linux) and follow the installation instructions.

---

## Installing Python and Necessary Tools

### Check Python Installation

1. Open a terminal (Command Prompt for Windows, Terminal for macOS/Linux).
2. Run:
   ```bash
   python --version
   ```
   If Python 3.9 or higher is not installed, follow the steps below.

### Install Python

1. Visit the [Python Downloads Page](https://www.python.org/downloads/).
2. Download and install the latest version of Python 3.9 or higher.
3. During installation, make sure to check **Add Python to PATH**.

---

## Installing Conda

Conda is a package and environment manager that makes it easy to install libraries and set up isolated environments for your projects.

### Why Use Conda?

Conda helps you:

- Manage multiple Python environments on the same machine.
- Avoid library conflicts by keeping dependencies separate for each project.
- Install both Python and non-Python packages efficiently.

### Install Miniconda

Miniconda is a lightweight version of Conda that includes only the essentials.

1. Visit the [Miniconda Downloads Page](https://docs.conda.io/en/latest/miniconda.html).
2. Download the installer for your operating system.
3. Follow the installation instructions, ensuring you add Miniconda to your system PATH.

### Verify Installation

1. Open your terminal and run:
   ```bash
   conda --version
   ```
2. If you see the version number, Conda is successfully installed.

### Create a Virtual Environment

1. Create a new environment for your project:
   ```bash
   conda create -n geo_ml_env python=3.9
   ```
2. Activate the environment:
   ```bash
   conda activate geo_ml_env
   ```
3. Install required libraries:
   ```bash
   conda install pandas numpy scikit-learn matplotlib openpyxl
   ```

---

## Installing JupyterLab

JupyterLab provides a powerful interface for writing and running Python code.

### Install JupyterLab

1. Open your terminal and install JupyterLab using pip:
   ```bash
   pip install jupyterlab
   ```
   If using Conda, you can install it within your Conda environment:
   ```bash
   conda install jupyterlab
   ```
2. Verify installation:
   ```bash
   jupyter --version
   ```

### Launch JupyterLab

1. Start JupyterLab by running:
   ```bash
   jupyter lab
   ```
2. A browser window will open with the JupyterLab interface.
3. Create a new notebook by selecting `File > New > Notebook` and choosing Python as the kernel.

---

## Setting Up Google Colab

Google Colab is an online platform that doesn’t require local installations, making it beginner-friendly.

### Access Google Colab

1. Open your browser and go to [Google Colab](https://colab.research.google.com).
2. Sign in with your Google account.

### Install Required Libraries in Colab

1. Open a new notebook in Google Colab.
2. In the first code cell, run:
   ```python
   !pip install pandas numpy scikit-learn matplotlib openpyxl
   ```
3. Confirm the libraries are installed by importing them in a new code cell:
   ```python
   import pandas as pd
   import numpy as np
   from sklearn.model_selection import train_test_split
   ```

{% callout title="You should know!" %}
Google Colab is a cloud-based platform, so you don’t need to worry about local installations. It’s perfect for beginners!
{% /callout %}

---

## Installing Python Libraries

These libraries are essential for the project. Follow these steps for either Google Colab or JupyterLab:

### Installation Command

Run the following in your terminal or notebook:

```bash
pip install pandas numpy scikit-learn matplotlib openpyxl
```

If using Conda:

```bash
conda install pandas numpy scikit-learn matplotlib openpyxl
```

### Verify Installation

1. Open a Python terminal or notebook.
2. Import the libraries:
   ```python
   import pandas as pd
   import numpy as np
   from sklearn.model_selection import train_test_split
   from sklearn.linear_model import BayesianRidge
   ```
3. If no errors occur, the installation was successful.

---

## Good Luck!

With these installations complete, you are ready to start coding and exploring the project. Happy coding!
