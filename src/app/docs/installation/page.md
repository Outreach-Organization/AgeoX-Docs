---
title: Installation
nextjs:
  metadata:
    title: Installation
    description: Guide to setting up your environment for the Geospatial and Machine Learning portions of the project.
---

# Installation Guide

This guide will walk you through the installation and setup process to ensure you are ready to start working on the Geospatial and Machine Learning modules of this project. Follow the steps below carefully.

---

## Install Required Software

#### Install QGIS

{% callout title="Tip for Instructors!" %}
_It is recommended that the instructor(s) of the course, downloads QGIS beforehand, to ensure that all students have adequate access to QGIS, and the same version of the software. If you are not able to, the following instructions can guide the students on the best practice for installation._
{% /callout %}

- Visit the [QGIS Download Page](https://qgis.org/download/) (if you have not done already).
- Choose the **Long Term Release (3.34 LTR)** version.
- Select your operating system (Windows, macOS, or Linux) and follow the installation instructions.

---

## Online Coding Environment

### Learning about Google Colab

#### What Is an Online Coding Environment?

For two of our modules, you will be using something called an **online coding environment**. An online coding environment is a web-based platform that lets you write, run, and test code entirely in your browser, **no installation required!** These environments provide a virtual workspace with a code editor, terminal or console, and often built-in libraries, so you can focus on learning and experimenting **without worrying about setting up software on your computer**. Because everything runs on cloud servers, you can access your projects from **any device** with an internet connection and collaborate with others **in real time**.

#### What Is Google Colab?

The online coding environment you will be using is called **Google Colab**. Google Colab (_short for Colaboratory_) is one of these online coding environments specifically designed for Python. It’s a **free service** provided by Google that looks and feels like a Jupyter Notebook (_another very popular online code environment_), allowing you to mix executable code cells with formatted text, images, and visualizations. Colab runs your code on **Google’s cloud servers** (including free access to GPUs), automatically saves your work to Google Drive, and makes it **easy to share projects** with classmates or colleagues via a simple link.

#### Why Use Google Colab?

Google Colab is popular because it **removes many common barriers to getting started with programming** and data analysis. You don’t need to install Python or any libraries on your local machine, just open a browser, sign in, and begin coding. That is it! Colab also provides **free access** to powerful compute resources (like GPUs) that would otherwise be expensive or difficult to set up. Additionally, its seamless integration with Google Drive and easy sharing options make it **an ideal tool** for collaboration, whether you’re working on school projects, research, or any coding tutorial.

### Accessing Google Colab

Alright, lets get started firing up your very first Google Colab environment!

{% callout type="warning" title="Important!" %}
Students, please make sure to check with your instructor(s), that **Google Colab** and **Google Collab Practice** _are not already installed_ on the computers you are using!
{% /callout %}

1. First, you are going to want to open up your internet browser and type in https://colab.research.google.com or follow this link here: [Google Colab](https://colab.research.google.com).
2. Sign in with your Google account (if you do not have one, go ahead and make one).
3. Once signed in, you should see a similar looking screen.
   ![Welcome screen of Google Colab](/images/Intro/Installation/Installation1.webp)

   {% callout title="You should know!" %}
   If you have never used Google Colab before, you probably will not see any files in the `Recent` tab. **That is okay**, we will be moving our files to our environment later in the activity.
   {% /callout %}

4. From there, you are going to want to hit the `New notebook` button at the bottom left of the screen.
   ![Google Colab new notebook selection](/images/Intro/Installation/Installation2.webp)

   {% callout title="You should know!" %}
   Sometimes this process may take a while to load. You are accessing Google Cloud, and it may take awhile to ping their servers. No need to panic!
   {% /callout %}

5. Once you have created a new notebook, you are now going to see an empty code editor screen. Congrats! You just created your first notebook file to work with your code in!
   ![Google Colab new notebook screen](/images/Intro/Installation/Installation3.webp)

Lets test that your environment is working with some sample code!

### Testing Sample Code in Colab

1. Lets start by naming our notebook that we are working in. Navigate to the top left of the screen where it says `Untitled0.ipynb`, and name it something you will remember. We are naming ours `My_First_Google_Notebook.ipynb`.

   {% callout type="warning" title="Important" %}
   Make sure when renaming your file, that you keep the `.ipynb` file extension. The file will not save correctly without it! The `.ipynb` lets your computer know what kind of file it is.
   {% /callout %}

   ![Renaming your notebook file in Google Colab](/images/Intro/Installation/Installation4.webp)

2. In order to run our code in the online environment, we are going to have to connect to a hosted runtime so our code executes. Navigate to the top right of the screen where it says `Connect`. When selected, then click `Connect to a hosted runtime`.

   ![Connecting to a hosted runtime](/images/Intro/Installation/Installation5.webp)

   {% callout title="You should know!" %}
   A **hosted runtime** is a cloud-based environment managed by the service provider where your code automatically runs without you having to set up or maintain the underlying servers. It may take a minute for the connection to be made, depending on how strong your wifi network signal is, and how many people are using the Colab service. It could be millions at a time!
   {% /callout %}

3. While it is loading, you should be seeing a message saying `Connecting...`.

   ![Connecting to a hosted runtime](/images/Intro/Installation/Installation6.webp)

4. When the process is finished, and you are connected to a runtime, you should now see a **green checkmark** and the words `RAM` and `Disk`.

   - **RAM** (_Random Access Memory_) shows how much “working memory” your program needs while it’s running.
   - **Disk** shows how much “storage space” it uses to read/write files or save data.

In simple terms, RAM temporarily holds the data your program is actively working with for quick access, while Disk provides longer-term storage for files and data even after your program stops.

By watching these numbers you can tell at a glance whether your code is light and easy for the online system to handle, or if it’s using a lot of resources (which could make it slower or risk hitting limits).

![Connecting to a hosted runtime](/images/Intro/Installation/Installation7.webp)

In the world of coding, sometimes to run your workflow, you need to install something called **libraries**. Libraries are essentially a collection of pre-written code, typically **functions** or **classes**, that can be used in multiple programs. It provides a **reusable set of tools** for common tasks, saving developers time and effort by avoiding the need to reinvent the wheel. Lets try this!

1. In the first code cell, you are going to type the following:
   ```python
   !pip install pandas numpy scikit-learn matplotlib openpyxl
   ```
2. You may notice that next to the code you just typed in your cell, is a small button with the **Play** icon. In order to run your code, you can press this button. You should start to see the icon have a loading bar around it when pressed.  
   ![Running code in a cell](/images/Intro/Installation/Installation8.webp)

3. Upon successful completion of running your code, you should now see a little **green checkmark** and the time is took to run the code in milliseconds.  
   ![Running code in a cell successful](/images/Intro/Installation/Installation9.webp)

   {% callout type="warning" title="Important" %}
   If you get an error, or see a red 'x', go back and check your code. Make sure it was correctly written, and also make sure you have **connected to a hosted runtime** like we did previously.
   {% /callout %}

4. Alright! So lets now confirm the libraries are installed by importing them in a new code cell. When you import your **newly installed libraries**, you are now allowing the code that you write, to **access them**. You are going to want to create a new cell below the one you just put code in. Do this by navigating to the toolbar and finding the `+ Code` button. Press this, and you should now see a new empty cell underneath your first cell.

   ![Creating a new tab](/images/Intro/Installation/Installation10.webp)

5. In your newly created code cell, please copy the code below into it and hit the **Play** button again:

   ```python
   import pandas as pd
   import numpy as np
   from sklearn.model_selection import train_test_split
   ```

   {% callout type="warning" title="Important" %}
   Make sure your code is properly aligned and not indented! If your code is not properly aligned, you can run into the following error:
   ![Possible error you may run into](/images/Intro/Installation/Installation11.webp)
   {% /callout %}

6. If that was successful and you once again see the mini green checkmark, that means you have successfully now imported your installed libraries into your notebook, to be used by your code! Lets do one last check to make sure.

7. Create one more empty coding cell, and paste the following code into it (_remember not to indent!_):

```python
   print("pandas version:", pd.__version__)
   print("numpy version:", np.__version__)
```

8. If all of the steps above were run successfully, you should now see versions for each of the libraries that we installed into our notebook!

   ![Checking if the version code was run successfully](/images/Intro/Installation/Installation12.webp)

---

## Good Luck!

And thats it! You have covered all of the basics in being able to use and setup Google Colab to successfully complete the rest of the activity with your classmates. With these installations complete, you are ready to start coding and exploring the rest of the project. Happy coding!

Please navigate to the `Core Concepts` tab if you would like to do a deep dive into the science behind this project!
