---
title: "Classification Algorithms"
date: "2023-10-06"
order: 4
excerpt: "A deeper guide to common classification algorithms, their intuition, strengths, weaknesses, and practical use cases."
---

## What is a Classification Algorithm?

A classification algorithm learns how to assign an input to a class. The input can be a row of tabular data, an image, a sentence, a signal sample, or a set of measured features. The output is a label such as "spam", "normal", "fault", "LOS", or "NLOS".

Different classifiers make different assumptions. Some draw simple linear boundaries. Some split data into tree-like rules. Some compare a new point with stored examples. Some combine many weak models into a stronger model.

## 1. Logistic Regression

Logistic regression is one of the best starting points for binary classification. Despite the word "regression", it is used to estimate the probability of a class.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">Logistic regression picture</div>
  <div className="font-mono text-xs text-white/75">linear score -> sigmoid -> probability -> class label</div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from Tpoint Tech/Javatpoint logistic-regression explanations and scikit-learn LogisticRegression documentation.</p>
</div>

### Intuition

The model computes a weighted sum of the features, then passes it through a sigmoid function. The result is a probability.

```text
score = w1*x1 + w2*x2 + ... + b
probability = sigmoid(score)
```

If the probability is above a chosen threshold, the model predicts class 1; otherwise, class 0.

### Strengths

- Fast to train.
- Easy to interpret.
- Strong baseline for many problems.
- Works well when the decision boundary is roughly linear.

### Weaknesses

- Struggles with complex non-linear patterns unless features are engineered.
- Sensitive to irrelevant features and poor scaling.
- May underfit when the true relationship is highly complex.

### Best Use Cases

- Medical risk scoring.
- Spam detection baselines.
- Credit scoring.
- Any problem where interpretability is important.

## 2. K-Nearest Neighbors

K-nearest neighbors (KNN) is a memory-based classifier. It does not learn a compact equation during training. Instead, it stores the training examples and compares new examples to them.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">KNN picture</div>
  <div className="grid gap-3 sm:grid-cols-3">
    <div className="rounded-lg bg-cyan-400/10 p-3">Find nearby points</div>
    <div className="rounded-lg bg-white/5 p-3">Count neighbor labels</div>
    <div className="rounded-lg bg-fuchsia-400/10 p-3">Predict majority class</div>
  </div>
</div>

### Intuition

To classify a new point:

1. Measure its distance to all training points.
2. Find the `K` closest points.
3. Take a majority vote among their labels.

If `K = 5` and three neighbors are class A while two are class B, the model predicts class A.

### Strengths

- Very simple.
- No explicit training phase.
- Can learn non-linear boundaries.
- Useful for small and well-scaled datasets.

### Weaknesses

- Slow prediction for large datasets.
- Sensitive to feature scaling.
- Performs poorly with many irrelevant features.
- Suffers in high-dimensional spaces.

### Best Use Cases

- Small datasets.
- Recommendation prototypes.
- Simple pattern recognition where distance is meaningful.

## 3. Decision Trees

A decision tree classifies by asking a sequence of questions. Each internal node tests a feature, each branch is an answer, and each leaf gives a final class.

### Intuition

For example, a tree for link quality might ask:

```text
Is SNR > 15 dB?
  yes -> Is delay spread low?
  no  -> Bad link
```

The tree learns which questions split the data most effectively. Common splitting criteria include Gini impurity and information gain.

### Strengths

- Easy to explain.
- Handles numerical and categorical data.
- Captures non-linear rules.
- Requires little preprocessing.

### Weaknesses

- Can overfit badly if allowed to grow too deep.
- Small changes in data can change the tree.
- Single trees are usually less accurate than ensembles.

### Best Use Cases

- Explainable rule-based decisions.
- Quick exploratory modeling.
- Problems where human-readable logic matters.

## 4. Support Vector Machines

Support Vector Machines (SVMs) try to find a boundary that separates classes with the largest possible margin.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">SVM picture</div>
  <div className="font-mono text-xs text-white/75">class A | margin | decision boundary | margin | class B</div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from margin-based SVM diagrams in Tpoint Tech/Javatpoint and support-vector-network literature.</p>
</div>

### Intuition

The best boundary is not only one that separates the classes; it is the one that leaves the widest gap between them. The closest training points to the boundary are called support vectors.

For non-linear problems, SVMs use kernels. A kernel lets the algorithm behave as if the data were mapped into a higher-dimensional space, without explicitly computing all those new dimensions.

### Strengths

- Works well in high-dimensional data.
- Effective when the number of features is large.
- Kernel trick handles non-linear boundaries.
- Strong theoretical foundation.

### Weaknesses

- Slow for very large datasets.
- Hyperparameter tuning is important.
- Results are less interpretable than logistic regression or trees.

### Best Use Cases

- Text classification.
- Bioinformatics.
- Medium-sized datasets with many features.
- Problems where a strong margin-based classifier is useful.

## 5. Random Forest

Random forest is an ensemble of decision trees. Instead of trusting one tree, it trains many trees and combines their predictions.

### Intuition

Each tree sees a random sample of the data and a random subset of features. Because the trees are different, their errors are partly different. Voting across many trees reduces the instability of a single tree.

### Strengths

- Strong performance on tabular data.
- Reduces decision-tree overfitting.
- Handles non-linear feature interactions.
- Provides feature importance estimates.
- Works with little preprocessing.

### Weaknesses

- Less interpretable than a single tree.
- Larger memory usage.
- Cannot extrapolate beyond patterns seen in training.

### Best Use Cases

- General tabular classification.
- Baselines for structured data.
- Problems with mixed feature types.

## 6. Gradient Boosting and XGBoost

Gradient boosting also uses many trees, but it builds them sequentially. Each new tree tries to correct the errors made by the previous trees.

### Intuition

Random forest builds many independent trees and averages them. Boosting builds a team in order: tree 1 makes mistakes, tree 2 focuses on those mistakes, tree 3 corrects remaining errors, and so on.

XGBoost is a highly optimized implementation of gradient-boosted trees. It became popular because it is accurate, regularized, scalable, and very effective on structured data.

### Strengths

- Excellent accuracy on tabular data.
- Handles non-linear interactions.
- Includes regularization to control overfitting.
- Often performs better than random forest when tuned carefully.

### Weaknesses

- More hyperparameters to tune.
- Can overfit if trees are too deep or learning rate is too high.
- Less transparent than simple models.

### Best Use Cases

- Structured/tabular datasets.
- Competitions and high-performance prediction tasks.
- Risk scoring, churn prediction, demand forecasting, and ranking tasks.

## 7. Neural Network Classifiers

Neural networks are useful when the input is complex, high-dimensional, or weakly structured, such as images, audio, text, or raw sensor streams.

### Intuition

A neural network learns layers of representation. Early layers learn simple patterns, while deeper layers combine them into more abstract concepts.

### Strengths

- Powerful for images, language, speech, and large datasets.
- Learns features automatically.
- Can model highly complex boundaries.

### Weaknesses

- Requires more data and compute.
- Harder to interpret.
- More sensitive to architecture and training choices.

## Model Selection Guide

| Need | Good starting model |
|---|---|
| Simple, interpretable baseline | Logistic regression |
| Small dataset with meaningful distance | KNN |
| Human-readable rules | Decision tree |
| Strong classifier for many features | SVM |
| Reliable tabular baseline | Random forest |
| High-performance tabular prediction | XGBoost or gradient boosting |
| Images, speech, text, raw signals | Neural network |

## Evaluation Checklist

- Use a separate test set.
- Check class imbalance.
- Report precision, recall, F1-score, and confusion matrix.
- Tune thresholds when false positives and false negatives have different costs.
- Use cross-validation when data is limited.
- Inspect failure cases, not only summary metrics.

## Python: Load Common Classifiers

All of these scikit-learn classifiers use the same core methods:

- `fit(X_train, y_train)` learns from data.
- `predict(X_test)` returns class labels.
- `predict_proba(X_test)` returns probabilities when supported.

```python
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.naive_bayes import GaussianNB

classifiers = {
    "logistic_regression": LogisticRegression(max_iter=1000),
    "knn": KNeighborsClassifier(n_neighbors=5),
    "decision_tree": DecisionTreeClassifier(max_depth=5, random_state=42),
    "svm": SVC(kernel="rbf", probability=True),
    "random_forest": RandomForestClassifier(n_estimators=200, random_state=42),
    "gradient_boosting": GradientBoostingClassifier(random_state=42),
    "naive_bayes": GaussianNB(),
}
```

## Python: Compare Classifiers on One Dataset

```python
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, f1_score

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

for name, clf in classifiers.items():
    # Scaling helps distance/kernel/linear methods; tree models do not need it,
    # but keeping one pipeline makes comparison simple.
    model = make_pipeline(StandardScaler(), clf)
    model.fit(X_train, y_train)
    pred = model.predict(X_test)

    print(
        name,
        "accuracy=", round(accuracy_score(y_test, pred), 3),
        "f1=", round(f1_score(y_test, pred), 3),
    )
```

## Python: Save and Load a Trained Classifier

```python
import joblib

best_model = make_pipeline(
    StandardScaler(),
    RandomForestClassifier(n_estimators=300, random_state=42)
)
best_model.fit(X_train, y_train)

joblib.dump(best_model, "classifier.joblib")

loaded_model = joblib.load("classifier.joblib")
print(loaded_model.predict(X_test[:5]))
```

## Takeaway

No classifier is best for every problem. Start with a simple baseline, understand the data, choose metrics that match the real cost of mistakes, and increase model complexity only when the simpler model is not enough.

## References and Further Reading

- C. Cortes and V. Vapnik, ["Support-vector networks"](https://doi.org/10.1007/BF00994018), *Machine Learning*, vol. 20, pp. 273-297, 1995.
- L. Breiman, ["Random Forests"](https://doi.org/10.1023/A:1010933404324), *Machine Learning*, vol. 45, pp. 5-32, 2001.
- J. H. Friedman, ["Greedy Function Approximation: A Gradient Boosting Machine"](https://doi.org/10.1214/aos/1013203451), *The Annals of Statistics*, vol. 29, no. 5, pp. 1189-1232, 2001.
- T. Chen and C. Guestrin, ["XGBoost: A Scalable Tree Boosting System"](https://doi.org/10.1145/2939672.2939785), *Proceedings of ACM SIGKDD*, San Francisco, CA, USA, 2016, pp. 785-794.
- Tpoint Tech/Javatpoint, ["Classification Algorithm in Machine Learning"](https://www.tpointtech.com/classification-algorithm-in-machine-learning).
- Tpoint Tech/Javatpoint, ["Logistic Regression in Machine Learning"](https://www.tpointtech.com/logistic-regression-in-machine-learning).
- Tpoint Tech/Javatpoint, ["Random Forest Algorithm in Machine Learning"](https://www.tpointtech.com/machine-learning-random-forest-algorithm).
- Scikit-learn documentation, ["LogisticRegression"](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html) and ["RandomForestClassifier"](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html).
