---
title: Machine Learning with Regression Models
nextjs:
  metadata:
    title: Machine Learning with Regression Models
    description: Machine Learning Regression Models
---

# Introduction

Welcome to **Module Two** of the project!

To support our research, our team collects detailed data from the field. Our technicians use tools and machines to measure plant traits like **height**, **biomass** (how much plant material is produced), **photosynthesis activity**, **soil characteristics**, **grain quality**, and **weather conditions** such as temperature and rainfall. These measurements are **recorded regularly** throughout the growing season, from June to October, in every experimental field plot. All the collected values are organized and stored in an excel file, which is part of this project’s dataset, but also what **you will be analyzing for this project!**

![Lab member measuring the height of sorghum](/images/Machine_Learning/ML1.webp)

The excel file `ARE_crop_data.xlsx` is organized with detailed crop data where each row **corresponds to a specific plot entry**. The columns filled in **red** represent elements related to the field design, such as Year, Plot ID, Genotype, Management Type (Mgmt), and Planting Date (PD)—providing structural and temporal context of the field trial. The columns filled in **green** represent potential target traits used for analysis, including phenotypic measurements like Plant Height (PH), Nutritional Content (e.g., LysP, SC, AMLS), and metabolite or digestibility indicators (e.g., MD_Lys, MD_CF). This color-coded structure allows for easy differentiation between **experimental setup** and **measurable outcomes**, which is essential for downstream analyses such as **Machine Learning-based trait prediction** or **genotype-performance evaluation**.

The objective of this section is to **develop a model to predict a plant trait** (such as yield, seed protein content, chlorophyll a fluorescence, etc.) from diverse data collected by drone, physiological instruments, and technicians in the field, along with climate data. This will help you gain **modeling and machine learning skills**. Below are the instructions to help you accomplish these tasks.

![A sorghum leaf being measured for its traits ](/images/Machine_Learning/ML2.webp)

## Before You Begin

In this module, we will be using the **Google Colab** online coding environment we created during the `Installation` steps. If you have not done these steps or need a refresher, please refer back to the [**Installation Guide**](/docs/installation) for details on setting up a Google Colab online environment.

{% callout title="Remember!" %}
This is a team effort! If a fellow classmate on your team needs time to revisit the installation steps, help guide them through the steps carefully, and pass along any tips and tricks you may have learned along the way.
{% /callout %}

---

## Setting Up Your Project

### Download Project Files

1. Your team will be accessing the files you need to begin this module here: [Project Files](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3).
2. You will be looking for the folder labeled **Section2: Machine_Learning_Regression_Models**.
3. Double click this folder, and you should now see two files: `ARE_ML_code.ipynb` & `ARE_crop_data.xlsx`.
4. You are now going to want to save both of these files, individually, to your local computer. We recommend saving them in the same place as one another. To save a file from Google Drive, find the 3 dots, and click them. You should see a button to `Download`.
   ![Downloading files from Google Drive ](/images/Machine_Learning/ML3.webp)
5. When prompted, select your file location of choice to place the files on your computer.
6. You now have two downloaded files. In the `ARE_crop_data.xlsx` file, you will find the data collected throughout the field season. Within the `ARE_ML_code.ipynb` file, you are going to see 6 large code blocks. These blocks hold code for 6 different machine learning models, in which you are to use with the excel data for analysis.

---

### Create a Project Directory

1. Create a folder for your project (e.g., `geo_ml_project`).
2. Place your dataset (`ARE_crop_data.xlsx`) in this folder.
3. Save your Python scripts and notebooks in the same directory.

### Prepare the Dataset

1. Ensure your dataset is in `.xlsx` format.
2. **Discard the columns related to field design** such as **`PlotID`**, **`Genotype`**, **`Management`**, and **`Planting Date`**.
3. **Select everything in your file**, while in the `Home` tab, find the dropdown for `Number` formatting, select `General`.
4. **Keep the `Year` column** as numeric values (e.g., 2023, 2024), which will be crucial when splitting your data into training (2023) and testing (2024).

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

## Learning Continued

### Now You Know

At this point, you might be thinking, _"Alright, but what’s the point of all this? Why do we even bother with modeling and regression models in the first place?"_ We had the very same questions when we started out, so we took the time to reflect on our journey, pinpoint the most pressing questions we had, and put together clear, straightforward answers to help you make sense of it too!

**What is Modeling?**
Modeling is the process of creating a simplified version of real-world scenarios using mathematics and data. In science, we use models to understand patterns, make predictions, and test ideas without always needing to run experiments in real life.

**What is a regression model?**
A regression model is a type of statistical or machine learning model used to understand and quantify the relationship between one or more input variables (called independent variables or features) and a continuous output variable (called the dependent variable or target).

**Why Use Models?**
Imagine trying to predict crop yield, weather, or even how a disease spreads — it's too complex to guess! Modeling helps us:

- Predict outcomes (like how a plant will grow based on soil or climate)
- Save time and resources by running simulations
- Understand hidden relationships between many factors (like sunlight, water, nutrients)

**What was the Model Doing?**
A model takes data from input features (e.g., plant height, leaf color, temperature) and learns from these data to predict an outcome — such as grain nutritional quality (amylose, protein or starch content). Behind the scenes, the model is doing lots of math to find patterns and make the best possible guesses.

**How Do We Interpret the Model?**
Once the model makes predictions, we compare the prediction data to actual data collected by the scientists in the field to see:

- How close was the prediction to the field data? → Good model
- How far off was it from the field data? → Maybe we need more data or a better model

**How do we test the accuracy of Models?**

**R²** _(Coefficient of determination R-squared)_ – Tells us how well the model fits the real data (0 indicates the model explains none of the variability whereas 1 indicates that all of the variability is explained by the model)

**RMSE** _(Root Mean Squared Error)_ – Measures the average difference of the actual data points from the predicted values . A value of zero indicates a perfect fit, while higher values indicate more error and less precise predictions.

**What are the predictors variables?**
When you integrate diverse data as inputs in models, not all the variables will be relevant to the model to make good guesses. Then the most important variables or features are crucial information to understand which variable drives the model output, then next time you will not need to collect all the other data.

{% callout title="Stop for a breath!" %}
Take a minute to reflect on all of the information. We know it is a lot to take in at once! Machine Learning is not an easy concept, it takes a long time to understand well and become an expert at. If you are curious and eager to learn more, please see the links below to become an expert yourself!
{% /callout %}

---

## Learning Resources

Want to learn more? Checkout these links here!

- Please visit this source if you want to learn more about the different types of machine learning: [Five Machine Learning Types to Know](https://www.ibm.com/think/topics/machine-learning-types)

- Find out here how others are using machine learning in agriculture!
  [Machine Learning in Agriculture: Use
  Cases and Applications](https://www.itransition.com/machine-learning/agriculture)

- If you want to read more about how machine learning may benefit agriculture, visit this resource: [What is Machine Learning & How Will it Benefit Agriculture?](https://www.croptracker.com/blog/what-is-machine-learning-how-will-it-benefit-agriculture.html)

---

## Glossary

**Identified Keywords**

- Model
- Modeling
- Learning models
- Regression
- Observed and predicted values
- Prediction
- Machine learning
- Plant trait
- Target trait
- Input features
- Trait prediction
- Training a model
- R2
- RMSE
- Adjusting model parameters
- Model accuracy
- Cross-validation
- Grid search
- Randomized search
- Hyperparameter
- Loss curves
- Accuracy metrics
- Feature importance

---

**Definitions**

- **Model**: An abstract representation or mathematical function that maps input data to output predictions based on learned patterns from data.

- **Modeling**: The process of creating and refining a model by selecting its form, structure, and parameters to best capture relationships in data.

- **Learning models**: A category of models in which parameters are automatically inferred from data through algorithms, as opposed to being manually specified (e.g., linear regression, decision trees, neural networks).

- **Regression**: A type of supervised learning task and statistical method focused on modeling the relationship between one or more input variables and a continuous output variable.

- **Observed and predicted values**:

  - **Observed values**: The actual, measured outcomes in the dataset (ground truth).
  - **Predicted values**: The outputs generated by the model when given input features.

- **Prediction**: The act of using a trained model to estimate the output (target) for new, unseen input data.

- **Machine learning**: A field of computer science that develops algorithms and models which improve their performance on a task through experience (i.e., by learning from data).

- **Plant trait**: A measurable characteristic of a plant (e.g., leaf area, height, biomass) used in biology or agronomy studies.

- **Target trait**: The specific plant trait that a model is trained to predict (sometimes called the dependent variable).

- **Input features**: The set of variables (independent variables) used by a model as inputs to predict the target trait (e.g., spectral indices, environmental measurements).

- **Trait prediction**: The task of estimating a plant’s target trait value using a model and a set of input features.

- **Training a model**: The process of feeding input–output pairs (features and observed target values) into a learning algorithm so that the model’s parameters are adjusted to minimize prediction error.

- **R² (Coefficient of Determination)**: A metric that indicates the proportion of variance in the observed target values explained by the model; ranges from 0 to 1, with higher values indicating a better fit.

- **RMSE (Root Mean Squared Error)**: A metric that quantifies the average magnitude of prediction errors by taking the square root of the average squared differences between observed and predicted values.

- **Adjusting model parameters**: The act of modifying either model weights (in learning algorithms) or structural settings to improve performance; often refers to both training (learning weights) and tuning (hyperparameter selection).

- **Model accuracy**: A general term for metrics that evaluate how well a model’s predictions match the true values; in regression contexts, this often involves R², RMSE, MAE, etc.

- **Cross-validation**: A technique for assessing model performance by partitioning data into multiple subsets (folds), training on some folds, and validating on the remaining fold(s) to estimate how well the model generalizes.

- **Grid search**: A systematic approach to hyperparameter tuning where a predefined set of hyperparameter values is exhaustively evaluated to find the combination that yields the best model performance.

- **Randomized search**: An alternative hyperparameter tuning method that samples a fixed number of hyperparameter combinations at random from a specified distribution, often more efficient than grid search when the search space is large.

- **Hyperparameter**: A configuration setting for a learning algorithm or model (e.g., learning rate, regularization strength, number of hidden layers) that is set before training begins and not learned directly from the data.

- **Loss curves**: Plots showing how the model’s loss (error) changes over training iterations or epochs, used to diagnose underfitting, overfitting, and convergence behavior.

- **Accuracy metrics**: Quantitative measures (e.g., R², RMSE, MAE for regression; accuracy, precision, recall for classification) that evaluate a model’s performance against ground truth.

- **Feature importance**: A ranking or score indicating how much each input feature contributes to the model’s predictions, often computed using methods like permutation importance, tree-based importance scores, or SHAP values.
