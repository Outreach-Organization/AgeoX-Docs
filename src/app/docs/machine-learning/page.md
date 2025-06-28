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
6. You now have two downloaded files. In the `ARE_crop_data.xlsx` file, you will find the data collected throughout the field season. This is what will be our _dataset_. Within the `ARE_ML_code.ipynb` file, you are going to see 6 large code blocks. These blocks hold code for 6 different machine learning models, in which you are to use with the excel dataset file for analysis.

## Machine Learning Models

As mentioned in the previous section, in the `ARE_ML_code.ipynb` file, you will see provided code that implements six regression models to **handle crop trait prediction**. Please see the following to see what these models are called, and a very high level summary of each of them:

- **Partial Least Squares (PLS) Regression**: Finds patterns by combining features into simpler parts to predict something when you have lots of related data.
- **Lasso Regression**: Helps pick only the most important features by shrinking less useful ones down to zero.
- **ElasticNet Regression**: Combines Lasso and another method (Ridge) to balance feature selection and avoid overfitting.
- **Bayesian Ridge Regression**: Adds a bit of randomness to the prediction process to make it more stable and handle uncertainty better.
- **Xtreme Gradient Boosting (XGBoost)**: Builds lots of small decision trees that learn from each other to make powerful predictions.
- **Support Vector Regression (SVR)**: Tries to find a smooth line that fits the data while ignoring small errors, making it good for tricky patterns.

You will have access to each of these, so feel free to use any of them or implement additional models such as **Random Forest** or **Linear Regression**, depending on your preference and familiarity.

{% callout title="You should know!" %}
For this portion of the activity, we have provided _all_ of the code you will need, for you! No prior coding experience needed!
{% /callout %}

---

## Choosing Your Target Trait

In machine learning, especially in **predictive modeling**, we try to predict something based on other pieces of information. That "something" we want to predict is called the **target trait** (also known as the target variable or label). In this project, the traits in your dataset are **measurable characteristics** of the plants—such as Yield (Y), Protein Crude (PC), or Quantum Yield of PSII (PhiPS2).

You will choose one of these green-highlighted traits as your _**target trait**_. This is the outcome your model will try to predict. For example, if you choose "Yield (Y)" as your target, the **goal** of your machine learning model will be to **predict how much yield a plant will produce** based on the values of other traits.

The other traits in the dataset, such as **plant height**, **chlorophyll content**, or **leaf area**, will serve as your input features. These features are the information the model uses to make predictions about the target trait. The **better the quality** and **relevance** of your input features, the more accurate your model’s predictions will be.

Before training your model, you’ll need to do some cleaning of the dataset! This means removing:

- Non-numeric columns, like plant ID or notes
- Irrelevant data, such as field layout info or metadata not useful for prediction
- Your cleaned dataset should contain only numeric columns related to plant traits, one of which will be your target, and the rest will be your inputs.

In summary, you will select **one trait** to predict (referred to as the “target”) from among the green-filled traits (e.g., Yield (Y), protein crude (PC), or quantum yield of PSII (PhiPS2)), while using other available traits as **input features**. Make sure to remove any non-numeric or irrelevant columns (like the field design columns mentioned above) before proceeding!

#### Key Terms to Remember:

- **Trait**: Any measurable characteristic of the plant.
- **Target trait** (target variable): The trait you are trying to predict (e.g., Y, PC, or PhiPS2).
- **Input features** (predictors): The traits used to help predict the target.

---

Let us resume where we have left off! As a recap, you should have the following two files downloaded to your computer: `ARE_ML_code.ipynb` & `ARE_crop_data.xlsx`.

We are now going to move on to **preparing the dataset** you will be working with.

### Create a Project Directory (_Optional_)

This is an optional step. If you already know the path of your downloaded files, you can keep them there, or you can condense them into a folder. The choice is yours!

1. Create a folder for your project (e.g., `geo_ml_project`).
2. Place your dataset (`ARE_crop_data.xlsx`) in this folder.
3. Now place your coding notebook in the same folder (`ARE_ML_code.ipynb`).
4. You now have what is called a **Project Directory**! This is just a fancy term for a place where you have all code files related to the same project, stored in one spot.

### Prepare the Dataset

Let us move on to preparing and cleaning the `ARE_crop_data.xlsx` dataset.

1. Ensure the dataset that you just downloaded is in `.xlsx` format.
2. Open the file using **Excel**.
   ![Viewing file in Excel ](/images/Machine_Learning/MLExcel1.webp)
3. With the file open, **discard the columns related to field design** such as **`PlotID`**, **`Genotype`**, **`Mgmt`**, and **`Planting Date (PD)`**.
   ![Discarding not needed columns ](/images/Machine_Learning/MLExcel2.webp)
4. With the columns deleted, this is now how your dataset should now look:
   ![Confirming how dataset now looks ](/images/Machine_Learning/MLExcel3.webp)
5. Odds are, you dataset is already set to how we would like it, but in science it is always best to double check! **Select everything in your file** (_clicking the square in the top left of your data table_). While in the `Home` tab, find on the top menu the **Number Formatting dropdown**. Click on this, and scroll down to `General`. Select `General`, _even if it is already prepopulated in the dropdown_.
   ![Formatting data using the Number Formatting dropdown](/images/Machine_Learning/MLExcel4.webp)
6. Your dataset should now look similar this this:
   ![Confirming the dataset looks correct](/images/Machine_Learning/MLExcel5.webp)
7. Make sure to now **save** your now updated file!

---

## Moving to Google Colab

### Moving your files

We are going to now want to **move your downloaded project files** (or folder if you just combined them), to **Google Colab** so you can run these files.

1. With your internet browser open, navigate to the Google Colab website once more, if you are not already there.

   {% callout type="warning" title="Important" %}
   If you had the tab open, and did not interact with Google Colab for too long, you may have to **restart your runtime** to be able to run code again. Remember, this is in the _far right corner_ by clicking the `Connect` button. You are looking for the green check mark to know you are successfully connected.
   {% /callout %}

2. With Google Colab open, navigate to the Toolbar and select the `File` button, and when shown more options, please select the `Upload notebook` button
   ![Uploading a new notebook](/images/Machine_Learning/ML4.webp)

3. You should now see the **Browse** button. Click this and navigate to where your `ARE_ML_code.ipynb` notebook file is located.

   ![Opening a new notebook](/images/Machine_Learning/ML5.webp)

4. Select the file, and click the `Upload` button. This will upload our notebook to Google Colab to be used.
   ![Finding the files button](/images/Machine_Learning/ML6.webp)

5. With your file now open, you will now want to navigate to the left side of your screen. You should see 5 icons. You are going to want to click the icon like **looks like a folder**.
   ![Finding the file upload button ](/images/Machine_Learning/ML7.webp)

6. When this tab opens, you will now see 4 more icons. You are going to want to click the **first icon**, to **upload your files**.
   ![Finding the upload button ](/images/Machine_Learning/ML8.webp)

7. Your computer should now be prompting you to **select from your computer's files**. You are going to want to navigate to where you placed the `ARE_crop_data.xlsx` dataset file.
   ![Finding the upload button ](/images/Machine_Learning/ML9.webp)

8. If that was successful, you should now see your **file that you selected**, in the file selection area in Google Colab.
   ![Confirming the file was successfully uploaded ](/images/Machine_Learning/ML10.webp)

Congrats! Your dataset file is now usable in Google Colab.

{% callout title="You should know!" %}
Whenever you see a `#` in the code, you should know this means that all of the words following that symbol, **represent a comment**. In coding, comments are used to explain **what the block of code underneath the comment does**, or **how the code operates**. Before running the code, take a few minutes to read through the comments we have provided to you in the code, to get a **better understanding** of what each block of code is doing!

Depending on your code editor, sometimes comments display as **green text**, and sometimes they display as **gray text**. In our code, you are looking for the _green_ text.
{% /callout %}

---

## Running the Models and Collecting Outputs

Alright so as a recap, at this point we now have our dataset cleaned, and your machine learning module and dataset **uploaded to Google Colab**. Lets start to run the code shall we!

1. Your dataset and model notebook should be **loaded into Google Colab** at this point.
   ![Confirming the files are in Google Colab](/images/Machine_Learning/ML11.webp)
2. Lets walk through the first model together! You should see the name of the first model at the very top, "**#Partial Least Square Regression model**". Notice above the rest of the code is the comments we talked about earlier (_a # followed by green text_). At the beginning of the code we are first importing in all of the required python libraries and dependencies needed to make our code work (e.g., `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `openpyxl`, etc.).
   ![Showing where the import statements are in the code](/images/Machine_Learning/ML12.webp)

3. The next chunk of code is what will be allowing our `ARE_crop_data.xlsx` dataset file to be used in our notebook.
   ![Showing the code that allows you to use the dataset](/images/Machine_Learning/ML13.webp)

4. _**This next code block is very important!**_ This is where you will be choosing your desired trait to analyze from the `ARE_crop_data.xlsx` dataset file.

   ![Choosing your desired trait to analyze](/images/Machine_Learning/ML14.webp)

5. Go back to the `ARE_crop_data.xlsx` dataset file, and choose a trait! We are going to choose `Yield(Y)`.
   ![Choosing your desired trait to analyze, Yield](/images/Machine_Learning/ML15.webp)

6. Now since we chose the trait `Yield(Y)`, we are going to replace `target_trait`, with `Y`.

```python
   data = data.dropna(subset=['target_trait'])
```

To:

```python
   data = data.dropna(subset=['Y'])
```

{% callout type="warning" title="Important!" %}
We are writing `Y` and not "Yield" because even though the Y = Yield, in our dataset file the column is strictly labeled as **Y** only!
{% /callout %}
![Showing the excel table where we got the desired plant trait we want to analyze](/images/Machine_Learning/ML16.webp)

7. You will now need to update all of the locations that say `target_trait` to `Y`.
   ![Verifying all of the code spots are correctly filled with the selected trait](/images/Machine_Learning/ML17.webp)
   {% callout type="warning" title="Important!" %}
   You will have to do this step for each new model that you start to work on! Whenever you choose a trait, you will have to put that trait, and replace the `target_trait` spot in the code.
   {% /callout %}
8. And that is it! Since you have selected a trait to analyze, and let the code know which trait from the dataset you are looking to analyze, you are good to **run the code**! We will do this by finding the **Play** button at the top left of a code block, and selecting it.
   ![Showing where the Play button is to run the code ](/images/Machine_Learning/ML18.webp)

If successfull, you should see a **green checkmark** next to the play button, and underneath the code:

- A **figure** showing the regression plot of the predicted vs. observed values.
  ![Showing the final result ](/images/Machine_Learning/ML19.webp)

Here is the breakdown of the **summary of each block of code** for a model (_this is the same information that is in the comments in the **green** text_):

1. Loading your dataset into your chosen environment (Google Colab).
2. Import the necessary libraries (e.g., pandas, numpy, scikit-learn, matplotlib, openpyxl, etc.).
3. Loading and handling missing data.
4. Spliting your dataset so that data from 2023 is used for training and data from 2024 is used for testing.
5. Define features and target
6. Transformation and scaling
7. Train the models
8. Prediction and evaluation
9. Save the outputs

Feel free to now try using the selected trait (`Y`), with the other models, or choose a different trait to analyze!

{% callout title="You should know!" %}
That everytime you run a code block, the figure that you see at the bottom of the code block, and an excel file with the **Observed** and **Predicted** results will be saved in the console on the left. If you do not see it, you may have to use the **refresh button**.
![Showing the saved figures and results in the console ](/images/Machine_Learning/ML22.webp)
![Showing the saved results in the console ](/images/Machine_Learning/ML23.webp)
{% /callout %}

## Understanding The Results

Once you have finished running the code, the output of the exercise includes a **regression plot** illustrating the relationship between the **observed and predicted values** of the target trait, as well as an **Excel file containing detailed results**. This file includes:

- The regression **performance** metrics
- The **observed vs. predicted** values
- The list of features selected by the model
  The **observed vs. predicted values** compare the _actual measurements_ taken in 2024 against _the predictions generated by models trained on 2023 data_. This comparison provides a **direct evaluation** of how well the model generalized to new data.
  The regression metrics, including **R² (coefficient of determination)** and **RMSE (root mean square error)**, quantify the model’s _predictive_ performance.
  {% callout title="You should know!" %}
  The **Predictions** and **Metrics** values can be found at the bottom of the excel sheet that is outputed to you, once you have ran the code blocks in the exercise.
  ![Showing the excel file where the predictions vs metrics are at the bottom of the sheet ](/images/Machine_Learning/ML24.webp)
  ![Showing the excel file where the the observed vs. predicted are at the bottom of the sheet ](/images/Machine_Learning/ML25.webp)
  ![Showing the excel file where the the metrics are at the bottom of the sheet ](/images/Machine_Learning/ML26.webp)
  {% /callout %}
  These metrics are **key indicators** used in the competition to evaluate how **accurately each team’s model performed**.
  Finally, the selected features represent the traits identified by the model as most important for predicting the target trait. These features offer valuable insights that can inform future model development and trait prediction strategies.

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

At this point, you might be thinking...

> Alright, but what’s the point of all this? Why do we even bother with modeling and regression models in the first place?

We had the very same questions when we started out, so we took the time to reflect on our journey, pinpoint the most pressing questions we had, and put together clear, straightforward answers to help you make sense of it too!

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

**What is an example of expected regression plots?**
Here is an example of regression plots you might expect to generate. This graph that you are seeing has very good model output as the R2 is close to 1 and the RMSE is low:

![Showing a regression plot example ](/images/Machine_Learning/ML20.webp)

This graph shows a good model output as R2 is a midpoint between 0 and 1 and the RMSE is higher than what the above graph is showing:

![Showing a second regression plot example ](/images/Machine_Learning/ML21.webp)

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
