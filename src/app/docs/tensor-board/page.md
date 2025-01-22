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

In this section, you will be revisiting code that you and your team utilized in sections [**one**](/docs/heatmap-generation) and [**two**](/docs/machine-learning) . The idea now is that you will be using a framework called TensorBoard. This framework employs a novel, visualization-driven approach to provide real-time insights into key ML processes such as data preparation, model training, feature selection, and prediction evaluation. By integrating interactive visualization tools, this task aims to bridge the gap between theoretical knowledge and practical application, making the complex ML processes that you have already seen more intuitive and engaging.

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

Utilizing TensorBoard with code from sections one and two will help you to visualize critical aspects of ML, including loss curves, accuracy metrics, feature importance, and geospatial heatmaps. This will help enable you to understand how models learn and perform.

Feel free to rerun the previous sections codes, now with the addition of the TensorBoard framework, and see what changes you notice. Are any new insights provided?

{% callout title="You should know!" %}
You can find the completed code that has the addition of TensorBoard here in [section three](https://drive.google.com/drive/folders/1tVPbNnlWsZem3CviXxUAObnSZgv9GWk3). Run the codes in your development environment to see new results!
{% /callout %}

---

## Setting Up Your Own Project

### Explore Further with TensorBoard

- If you’d like to learn more and set up your own TensorBoard project, check out these official guides for [TensorFlow](https://www.tensorflow.org/tensorboard/get_started) and [PyTorch](https://pytorch.org/tutorials/recipes/recipes/tensorboard_with_pytorch.html). They will help you understand how to visualize your models’ performance, track metrics, and gain deeper insights during training.

<!-- 1. **Open your terminal or command prompt** (e.g., PowerShell on Windows, Terminal on macOS/Linux).

2. **Install the required packages** using pip:
   ```bash
   pip install tensorboard jupyter-tensorboard tensorboardX
   ```

- Tensorboard is the main visualization tool.
- Jupyter-tensorboard helps integrate TensorBoard into Jupyter notebooks.
- TensorboardX is a helper library that makes logging simpler for various frameworks (like PyTorch).

3. **Verify** the installation:
   ```bash
   pip show tensorboard
   pip show jupyter-tensorboard
   pip show tensorboardX
   ```
4. **(Optional)** In Jupyter Notebook:

- If you want to run TensorBoard inside a Jupyter Notebook, you might need to load the extension

  ```bash
  jupyter nbextension enable --py tensorboard

  ```

  - Check your Jupyter environment’s documentation if you have any issues.

## Logging

### Log Data Statistics

1. **Import the necessary libraries** in your Python script or Jupyter Notebook:

   ```bash
   from torch.utils.tensorboard import SummaryWriter
   import numpy as np
   ```

2. **Create and Initialize** a SummaryWriter that will save logs to a folder named _"runs"_:

   ```bash
    writer = SummaryWriter(log_dir="runs/data_stats_demo")
   ```

3. **Calculate and log basic statistics** (like mean and standard deviation) for your dataset. For example:

   ```py
    # Suppose 'data' is a NumPy array of your numeric values
   data = np.array([5, 10, 15, 20])
   mean_value = np.mean(data)
   std_value = np.std(data)

   # Log the values
   writer.add_scalar("DataStats/mean", mean_value, 0)
   writer.add_scalar("DataStats/std", std_value, 0)
   ```

4. **Close the writer** when finished:

   ```bash
   writer.close()
   ```

5. **Start Tensorboard** to see the logs:
   ```bash
   tensorboard --logdir=runs
   ```

- Open your browser and go to http://localhost:6006 to view the DataStats logs.

### Log Preprocessing Steps

1. **Track any changes in your dataset** during preprocessing, such as handling missing values or feature normalization.

2. Use **SummaryWriter** to record the steps. For example:

   ```py
   # Re-initialize a writer for preprocessing logs
   writer = SummaryWriter(log_dir="runs/preprocessing_logs")

   # Example: Count missing values before and after cleaning
   missing_before = 10
   missing_after = 2

   writer.add_scalar("Preprocessing/missing_values_before", missing_before, 0)
   writer.add_scalar("Preprocessing/missing_values_after",  missing_after,  0)

   # Example: Log a normalization factor
   normalization_factor = 0.01
   writer.add_scalar("Preprocessing/normalization_factor", normalization_factor, 0)

   writer.close()

   ```

- Check the Preprocessing section to visualize how your data changed.

### Log Model Training Metrics

1. **Import or define your model**. Then, while training, **record your metrics** (e.g., Mean Squared Error (MSE), R² score) at each epoch or iteration:

   ```py
   # Re-initialize a writer for preprocessing logs
   writer = SummaryWriter(log_dir="runs/preprocessing_logs")

   # Example: Count missing values before and after cleaning
   missing_before = 10
   missing_after = 2

   writer.add_scalar("Preprocessing/missing_values_before", missing_before, 0)
   writer.add_scalar("Preprocessing/missing_values_after",  missing_after,  0)

   # Example: Log a normalization factor
   normalization_factor = 0.01
   writer.add_scalar("Preprocessing/normalization_factor", normalization_factor, 0)

   writer.close()

   ```

2. **Start or refresh** TensorBoard to watch your training metrics evolve:

   ```bash
   tensorboard --logdir=runs
   ```

- Under Training, you should see how MSE and R² change over the epochs.

### Log Hyperparameter Tuning Results

1. **Try different hyperparameters** in your model (e.g., learning rate, number of layers, or regularization parameter).

2. **Log the results** for each hyperparameter setting:

   ```py
   # We'll try a few learning rates and log the final MSE for each
    for lr in [0.001, 0.01, 0.1]:
        writer = SummaryWriter(log_dir=f"runs/hparam_tuning_lr_{lr}")

        # ... train model with learning rate 'lr' ...
        final_mse = 0.4  # placeholder for final MSE

        writer.add_scalar("HParam/MSE", final_mse, 0)
        writer.close()
   ```

3. **Compare the logs** in TensorBoard:

   ```bash
   tensorboard --logdir=runs
   ```

- Look at each run (hparam_tuning_lr_0.001, etc.) side by side to see which hyperparameters work best.

### Log Predictions vs. Actual Values

1. After **training your model**, generate predictions on a test set:

   ```py
    # Assume y_test are actual values, y_pred are model predictions
    y_test = [3, 5, 7, 9]
    y_pred = [2.8, 5.2, 6.9, 9.1]

   ```

2. **Create a plot** to compare the predictions vs. the actual values:

   ```py
    import matplotlib.pyplot as plt

    plt.figure()
    plt.scatter(y_test, y_pred, label='Pred vs. Actual')
    plt.plot([min(y_test), max(y_test)], [min(y_test), max(y_test)], color='red', label='y=x line')
    plt.xlabel('Actual')
    plt.ylabel('Predicted')
    plt.legend()
    plt.savefig('pred_vs_actual.png')
    plt.close()

   ```

3. **Log the image** with TensorBoard:

   ```py
    from PIL import Image
    import torchvision

    writer = SummaryWriter(log_dir="runs/predictions_vs_actual")
    image = Image.open('pred_vs_actual.png')
    image_tensor = torchvision.transforms.ToTensor()(image)
    writer.add_image('PredVsActual', image_tensor, 0)
    writer.close()

   ```

4. **Open TensorBoard** to visually inspect how well the model did:

   ```bash
    tensorboard --logdir=runs

   ```

### Log Feature Importance

- If your model computes feature importance scores (e.g., in tree-based models):

1. Obtain **feature importance** values:

   ```py
    feature_names = ["feature1", "feature2", "feature3"]
    importance_scores = [0.3, 0.5, 0.2]  # example values


   ```

2. Log each feature’s importance **as a scalar**:

   ```py
   writer = SummaryWriter(log_dir="runs/feature_importance")
   for i, score in enumerate(importance_scores):
      writer.add_scalar(f"FeatureImportance/{feature_names[i]}", score, 0)
   writer.close()


   ```

3. **Visualize** in TensorBoard:

   ```bash
   tensorboard --logdir=runs

   ```

### Log a Heatmap of Predictions

- If your data is spatial or you want to visualize your predictions as a heatmap:

1. Generate a **2D (or 3D)** array representing spatial predictions:

   ```py
   predictions_map = np.random.rand(10, 10)  # example 10x10 grid


   ```

2. **Convert the array** to a color-mapped image:

   ```py
    import matplotlib.pyplot as plt

    plt.imshow(predictions_map, cmap='viridis')
    plt.colorbar(label='Prediction Value')
    plt.title('Prediction Heatmap')
    plt.savefig('prediction_heatmap.png')
    plt.close()


   ```

3. **Log the heatmap** in TensorBoard:

   ```py
    writer = SummaryWriter(log_dir="runs/prediction_heatmap")
    image = Image.open('prediction_heatmap.png')
    image_tensor = torchvision.transforms.ToTensor()(image)
    writer.add_image('Heatmap', image_tensor, 0)
    writer.close()


   ```

4. **Check TensorBoard**

   ```bash
    tensorboard --logdir=runs

   ```

- Under Heatmap, explore the spatial distribution of your predictions.

## Final Notes

- Each logging action writes information to a log directory. You can rename it or organize it by project, date, or model version.
- TensorBoard runs on port 6006 by default, so you can access the dashboard in your browser at **http://localhost:6006**.
- Remember to close your SummaryWriter to ensure all logs are properly saved.
- If you run into issues with permissions or path errors, double-check the directory you are writing to (e.g., **_C:\Users\YourName_** on Windows or **_/home/yourname_** on Linux).
  {% callout title="Good luck!" %}
  These steps should give you a solid foundation for logging and visualizing everything from raw data stats to complex model metrics, all in TensorBoard. Happy logging!
  {% /callout %} -->
