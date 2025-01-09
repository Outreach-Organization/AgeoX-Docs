---
title: Machine Learning with Regression Models
nextjs:
  metadata:
    title: Machine Learning with Regression Models
    description: Machine Learning Regression Models
---

# Introduction

The objective of this section is to develop a model to predict a plant trait (such as yield, seed protein content, chlorophyll a fluorescence, etc.) from diverse data collected by drone, physiological instruments, and technicians in the field, along with climate data. This will help you gain modeling and machine learning skills. Below are the instructions to help you accomplish these tasks.

---

## Before You Begin

You should already have Python (3.9+), Conda (or Miniconda), JupyterLab or Google Colab set up, and the required libraries installed (e.g., `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `openpyxl`). If you have not done these steps or need a refresher, please refer back to the [**Installation Guide**](/docs/installation) for details on installing and verifying these tools.

---

## Setting Up Your Project

### Download Project Files

- Access the project files here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
- You will be looking for the folder labeled **Section 2** that contains the following: (`ARE_ML_code.ipynb` & `ARE_crop_data.xlsx`), in it.
- Within the `ARE_ML_code.ipynb` file, you are going to see 6 large code blocks. Those are code for the 6 different machine learning models, in which you are to use with the excel data for analysis.

---

### Create a Project Directory

1. Create a folder for your project (e.g., `geo_ml_project`).
2. Place your dataset (`ARE_crop_data.xlsx`) in this folder.
3. Save your Python scripts and notebooks in the same directory.

### Prepare the Dataset

1. Ensure your dataset is in `.xlsx` format.
2. **Discard the columns related to field design** such as **`PlotID`**, **`Genotype`**, **`Management`**, and **`Planting Date`**.
3. **Keep the `Year` column** as numeric values (e.g., 2023, 2024), which will be crucial when splitting your data into training (2023) and testing (2024).

---

## Choosing Your Target Trait

You can select one trait to predict (referred to as the “target”) from among the green-filled traits (e.g., `Yield (Y)`, `protein crude (PC)`, or `quantum yield of PSII (PhiPS2)`), while using other available traits as input features. Make sure to remove any non-numeric or irrelevant columns (like the field design columns mentioned above) before proceeding.

---

## Available Machine Learning Models

We have provided code that implements six regression models to handle crop trait prediction:

- **Partial Least Squares (PLS) Regression**
- **Lasso Regression**
- **ElasticNet Regression**
- **Bayesian Ridge Regression**
- **Xtreme Gradient Boosting (XGBoost)**
- **Support Vector Regression (SVR)**

Feel free to use any of these or implement additional models such as **Random Forest** or **Linear Regression**, depending on your preference and familiarity.

When using the provided code, **replace** the placeholder `target_trait` with the actual name of the target you selected. This can be done manually or by asking ChatGPT to do it for you in a single command:

> "Please update this code to replace `target_trait` by `XXXX`."

---

## Running the Models and Collecting Outputs

1. **Load your dataset** into your chosen environment (JupyterLab or Google Colab).
2. **Import the necessary libraries** (e.g., `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `openpyxl`, etc.).
3. **Split your dataset** so that data from **2023** is used for training and data from **2024** is used for testing.
4. **Update the provided regression code** (or your own scripts) to reflect your chosen target trait.
5. **Train the models**.
6. **Save the outputs**:
   - A spreadsheet (Excel file) containing the **predicted** and **observed** values of your target trait.
   - **Model evaluation metrics** (e.g., R², RMSE) for each regression model.
   - A **figure** showing the regression plot of the predicted vs. observed values.

---

## Tuning Your Models

- Adjust model parameters and hyperparameters (e.g., learning rate, number of estimators, regularization strength, etc.) to **improve model accuracy**.
- Use techniques such as **cross-validation**, **grid search**, or **randomized search** to systematically find better hyperparameter settings.
- Compare metrics across different models to decide which approach works best for your data.

---

## Wrap-Up

1. **Keep track of your final predictions**, figures, and metrics.
2. **Document any changes** you make to model hyperparameters or the data preprocessing steps so you can reproduce or improve your results later.
3. If you have any issues with your environment, **refer back to the Installation Guide** or ask for assistance.

Happy modeling!
