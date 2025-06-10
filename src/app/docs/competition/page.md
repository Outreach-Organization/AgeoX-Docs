---
title: The Sorghum Prediction Challenge
nextjs:
  metadata:
    title: The Sorghum Prediction Challenge
    description: The Sorghum Prediction Challenge
---

# Fine-Tuning Machine Learning Models for Peak Performance

Let's make this activity competitive! Do you and your team have what it takes to create a model that most accurately predicts plant traits of our sorghum? Compete with your peers to develop the most accurate prediction using real-world climate data and soil conditions.

---

## Before You Begin

We wanted to share with you some tips that we found helpful when we created our model!

{% callout title="You Should Know!" %}
Don't get discouraged! Machine learning is a challenging topic, but you're tackling concepts that most people have never explored. You're at the forefront of cutting-edge technology, learning skills that will shape the future!
{% /callout %}

---

## Tips and Tricks

Machine learning models are like athletes—they need the right training to perform at their best! Fine-tuning is the secret sauce that helps models make accurate predictions while avoiding overfitting. Here’s a breakdown of how to fine-tune different types of ML models like a pro!

### Feature Selection Models (PLS & LASSO)

- **PLS (Partial Least Squares):** Adjust the number of components to balance simplicity and accuracy.
- **LASSO:** Tune the **alpha** value (regularization) to prevent overfitting while keeping important features.

### Tree-Based Models (XGBoost)

- **Learning Rate (eta):** Controls how fast the model learns (too fast = chaos, too slow = forever training).
- **Max Depth:** Determines how complex each decision tree can get—too deep means overfitting!
- **Boosting Rounds:** More rounds = better learning, but at the cost of training time.

### Support Vector Regression (SVR)

- **Kernel Type:** Decides how data is mapped (linear, polynomial, RBF, etc.).
- **C Parameter:** Controls how much the model cares about errors.
- **Epsilon & Gamma:** Adjust flexibility and margin of error.

### Linear Models (ElasticNet & Bayesian Ridge)

- **ElasticNet:** Fine-tune **l1_ratio** to mix L1 and L2 regularization (sparsity vs. stability).
- **Bayesian Ridge:** Tweaking priors helps manage uncertainty and multicollinearity.

## Optimizing Like a Pro

- **Cross-validation:** Always check if your model works well on unseen data!
- **Performance Metrics:** Use Mean Squared Error (MSE) or R-Squared to measure success.
- **Hyperparameter Search:** Use GridSearchCV or Optuna to automate tuning and save time.

Fine-tuning is an art and a science—experiment, test, and tweak until your model shines! 🌟 If you end up having issues with your environment, refer back to the [**Installation Guide**](/docs/installation) or ask for assistance.

Happy modeling!

## Leaderboard

We recommend that the educator of your course makes a table like this, that everyone can access. From there, when a team goes to make a trait prediction and receives a score back from their model that they ran and created in the code, they can update it for the class to see and compare against!

# 🏆 2025 Leaderboard 🏆

| Rank | Team Name       | Score (R²) | Trait Predicted         | Last Updated |
| ---- | --------------- | ---------- | ----------------------- | ------------ |
| 1️⃣   | Team Alpha      | 0.92       | Yield                   | 2025-01-29   |
| 2️⃣   | Data Wizards    | 0.89       | Protein Content         | 2025-01-28   |
| 3️⃣   | ML Mavericks    | 0.87       | Chlorophyll Florencense | 2025-01-28   |
| 4️⃣   | Sorghum Squad   | 0.85       | Amylose Content         | 2025-01-27   |
| 5️⃣   | The Overfitters | 0.80       | Starch Content          | 2025-01-26   |

_The leaderboard should be updated with your final scores at the end of the semester to declare a winner._

Keep fine-tuning! Can you reach the top?
