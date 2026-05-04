---
title: "Classification Algorithms"
date: "2023-10-06"
order: 4
excerpt: "A deep dive into the most popular classification algorithms and their properties."
---

## What is Classification?

Classification is a supervised machine learning technique where the algorithm attempts to assign a discrete label or category to an input. For example, predicting whether an email is "Spam" or "Not Spam".

---

## 1. Logistic Regression
Despite its name containing "regression", Logistic Regression is a fundamental **binary classification** algorithm.

![Logistic Regression](https://upload.wikimedia.org/wikipedia/commons/c/cb/Ideal_logistic_curve.svg)
*Image Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ideal_logistic_curve.svg)*

- **How it Works:** It uses the logistic (sigmoid) function to squash the output of a linear equation into a probability value between 0 and 1. If the probability > 0.5, it predicts Class A; otherwise, Class B.
- **Properties:**
  - Fast to train and easily interpretable.
  - Only works well when classes are linearly separable.
  - Less prone to overfitting on small datasets.

## 2. K-Nearest Neighbors (KNN)
KNN is a simple, non-parametric algorithm used for both classification and regression.

![KNN Algorithm](https://upload.wikimedia.org/wikipedia/commons/e/e7/KnnClassification.svg)
*Image Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:KnnClassification.svg) (CC BY-SA)*

- **How it Works:** To classify a new data point, it looks at the "K" closest data points in the training set and takes a majority vote. If K=3 and 2 of the nearest neighbors are "Cats" and 1 is a "Dog", it classifies the point as a "Cat".
- **Properties:**
  - "Lazy Learner": It doesn't actually train a model; it just memorizes the entire dataset.
  - Very slow at prediction time on large datasets (it must calculate distance to every single point).
  - Highly sensitive to irrelevant features and the scale of the data.

## 2. Decision Trees
A highly intuitive algorithm that splits data into branches based on feature values, forming a tree-like structure.

- **How it Works:** It asks a series of True/False questions (e.g., "Is age > 30?") to split the data. The leaves of the tree represent the final classification.
- **Properties:**
  - Extremely easy to understand and visualize.
  - Handles both numerical and categorical data without much preprocessing.
  - **Major Con:** Highly prone to overfitting (creating a tree so complex that it memorizes the training data).

## 4. Support Vector Machines (SVM)
SVM is a powerful algorithm that finds the optimal "line" (or hyperplane) to separate different classes.

![SVM Diagram](https://upload.wikimedia.org/wikipedia/commons/f/fe/Kernel_Machine.svg)
*Image Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kernel_Machine.svg) (CC BY-SA)*

- **How it Works:** It looks for the boundary that maximizes the "margin" (the distance between the line and the nearest data points of each class). 
- **Properties:**
  - Highly effective in high-dimensional spaces (when you have many features).
  - Uses the "Kernel Trick" to solve complex, non-linear classification problems by mapping data into higher dimensions.
  - Memory intensive and slow to train on large datasets.

## 5. Random Forest
An ensemble learning method that builds upon Decision Trees.

- **How it Works:** Instead of building one tree, it builds a "forest" of hundreds of decision trees, each trained on a random subset of data. The final prediction is made by taking a majority vote from all the trees.
- **Properties:**
  - One of the most accurate algorithms available.
  - Solves the overfitting problem of single Decision Trees.
  - Harder to interpret than a single tree (it is a "black box" model).

## 6. Gradient Boosting (GB) & XGBoost
Gradient Boosting algorithms are currently the absolute state-of-the-art for tabular (structured) data.

- **How it Works:** Like Random Forest, it builds many decision trees. However, instead of building them independently, it builds them *sequentially*. Each new tree is specifically designed to correct the errors made by the previous tree. 
- **XGBoost:** (Extreme Gradient Boosting) is an optimized, highly efficient software library implementing gradient boosting. It is famous for winning Kaggle competitions.
- **Properties:**
  - Incredible predictive accuracy, often beating Random Forests.
  - Can overfit if the learning rate is too high or the trees go too deep.
  - Slower to train sequentially compared to Random Forest's parallel training.
