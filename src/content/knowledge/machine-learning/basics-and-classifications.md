---
title: "Basics & Classifications"
date: "2023-10-02"
order: 1
excerpt: "An introduction to the core concepts of Machine Learning and how classification problems are solved."
---

## What is Machine Learning?

At its core, **Machine Learning (ML)** is a subset of Artificial Intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Instead of writing rigid rules (`if A then B`), we feed data to algorithms, and the algorithms discover the rules on their own.

Think of it like teaching a child to identify an apple. You don't give them a mathematical definition of an apple; you just show them 50 pictures of apples. Eventually, their brain recognizes the pattern.

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center">
  [Raw Data] ➡️ [Machine Learning Algorithm] ➡️ [Trained Model] ➡️ [Predictions]
</div>

---

## Classification: Sorting the World

One of the most fundamental tasks in Machine Learning is **Classification**. 

Classification is the process of predicting the *category* or *class* of a given data point. The output is always a discrete, specific label (e.g., "Spam" or "Not Spam").

### Common Examples of Classification:
- **Email Spam Filtering:** Is this email `Spam` or `Inbox`?
- **Medical Diagnosis:** Does this X-Ray show a `Tumor` or `Healthy` tissue?
- **Sentiment Analysis:** Is this movie review `Positive`, `Negative`, or `Neutral`?

### Types of Classification

1. **Binary Classification:** 
   The simplest form. There are only two possible outcomes. 
   *(Example: True/False, Yes/No, Cat/Dog)*

2. **Multi-Class Classification:** 
   There are more than two possible outcomes, but each data point can only belong to **one** category. 
   *(Example: Classifying an image of a fruit as either an Apple, Banana, OR Orange).*

3. **Multi-Label Classification:** 
   A data point can belong to **multiple** categories at the same time. 
   *(Example: A news article can be tagged as both `Politics` AND `Economics`).*

---

## Popular Classification Algorithms

- **Logistic Regression:** Despite the name, this is used for binary classification. It outputs a probability between 0 and 1.
- **Decision Trees:** Creates a flowchart-like tree structure to split data based on features.
- **Support Vector Machines (SVM):** Finds the optimal "line" or boundary that best separates different classes in high-dimensional space.
- **Random Forest:** An ensemble of many Decision Trees working together to make a highly accurate prediction.
