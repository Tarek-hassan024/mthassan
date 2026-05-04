---
title: "Regression Algorithms"
date: "2023-10-07"
order: 5
excerpt: "A deep dive into popular regression algorithms used for predicting continuous values."
---

## What is Regression?

Regression is a supervised machine learning technique used to predict a **continuous numerical value**. Unlike classification (which predicts a category like "Cat" or "Dog"), regression answers the question "How much?" or "How many?". 

Examples include predicting house prices, stock market trends, or a patient's blood pressure.

---

## 1. Linear Regression
The simplest and most widely used regression algorithm.

![Linear Regression](https://upload.wikimedia.org/wikipedia/commons/3/3a/Linear_regression.svg)
*Image Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Linear_regression.svg) (Public Domain)*

- **How it Works:** It assumes a linear relationship between the input variables ($X$) and the single output variable ($Y$). It draws a "line of best fit" through the data points by minimizing the sum of squared errors.
- **Properties:**
  - Very fast to train and mathematically simple.
  - Highly interpretable: you can look at the "weights" to see exactly how much each feature impacts the prediction.
  - Fails poorly if the true relationship in the data is non-linear (e.g., curved data).

## 2. K-Nearest Neighbors (KNN) Regressor
KNN can predict continuous numbers just as easily as it predicts categories.

- **How it Works:** It finds the "K" nearest training data points to the new input. Instead of taking a majority vote, it calculates the **average** of those neighbors' continuous values.
- **Properties:**
  - Very simple to implement.
  - Struggles with high-dimensional data (the "curse of dimensionality").

## 2. Polynomial Regression
A step up from Linear Regression, used when the data shows curves.

- **How it Works:** Instead of fitting a straight line, it fits a curved line (a polynomial curve) to the data by raising the input features to higher powers (e.g., $X^2$, $X^3$).
- **Properties:**
  - Captures complex, non-linear relationships much better than linear regression.
  - **Major Con:** Highly prone to overfitting if you use too high of a polynomial degree (the curve starts wildly connecting every single dot rather than finding a smooth trend).

## 4. Support Vector Regression (SVR)
The regression equivalent of the Support Vector Machine (SVM) classifier.

- **How it Works:** Instead of finding a line that separates classes, SVR tries to fit as many data points as possible *within* a certain margin (a tube) around the regression line. It ignores errors as long as they fall inside this acceptable margin.
- **Properties:**
  - Highly robust to outliers (since it only cares about points outside the margin).
  - Can model highly non-linear relationships using the Kernel trick.

## 5. Random Forest Regressor
The regression version of the Random Forest algorithm.

- **How it Works:** It builds a massive forest of decision trees. Instead of taking a "majority vote" like the classifier version, it takes the **average** of the numerical predictions outputted by all the individual trees.
- **Properties:**
  - Incredibly robust and requires very little tuning to get good results.
  - Automatically handles non-linear relationships and interactions between features.
  - Cannot extrapolate: It cannot predict a value outside the range of the training data (unlike linear regression, which can extend its line to infinity).

## 6. Gradient Boosting (GB) & XGBoost Regressor
The dominant algorithm for winning structured-data predictive competitions.

- **How it Works:** It builds decision trees sequentially. Each new tree predicts the *residual error* (the difference between the actual value and the prediction) of the previous trees, continuously adjusting its aim until the error is minimized.
- **Properties:**
  - Produces incredibly accurate predictions.
  - Handles missing data naturally (especially XGBoost).
  - Sensitive to outliers because it specifically tries to correct large errors.
