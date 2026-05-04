---
title: "Basics & Classifications"
date: "2023-10-02"
order: 1
excerpt: "A clearer introduction to machine learning, the basic vocabulary, and how classification problems are framed."
---

## What is Machine Learning?

Machine Learning (ML) is the part of Artificial Intelligence where a computer improves its behavior by learning patterns from data. Instead of writing every rule by hand, we give the system examples and ask it to learn the rule that connects inputs to useful outputs.

A classic definition from Tom Mitchell says a program learns from experience if its performance at a task improves with experience. In practical terms:

- **Task:** What do we want the system to do? Example: detect spam email.
- **Experience:** What data does it learn from? Example: old emails with spam/not-spam labels.
- **Performance:** How do we measure success? Example: accuracy, precision, recall, or error rate.

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center leading-loose">
  Data -> Learning Algorithm -> Trained Model -> Prediction -> Evaluation
</div>

The trained model is not magic. It is usually a mathematical function with adjustable parameters. Training means adjusting those parameters until the model makes fewer mistakes on examples it has seen, while still generalizing to examples it has not seen.

## The Basic Vocabulary

Before studying algorithms, these terms make the field much easier to read:

- **Dataset:** A collection of examples.
- **Sample or instance:** One row/example in the dataset.
- **Feature:** An input variable used by the model. In a house-price model, features could be area, number of rooms, and location.
- **Label or target:** The answer we want to predict.
- **Model:** The learned mapping from features to outputs.
- **Training set:** Data used to fit the model.
- **Validation set:** Data used to tune choices such as hyperparameters.
- **Test set:** Data kept aside until the end to estimate real performance.
- **Generalization:** The ability to work well on new data, not only memorized training data.

## Learning as Pattern Finding

Suppose we want to detect whether an email is spam. A hand-written rule system might say: "if the email contains 'free money', mark it as spam." That rule fails quickly because real emails are messy. ML learns from many examples instead:

1. It sees features such as words, sender behavior, links, and punctuation.
2. It compares its prediction with the correct label.
3. It changes its parameters to reduce future mistakes.
4. It is evaluated on unseen emails.

This is why data quality matters. A powerful algorithm trained on biased, noisy, or unrepresentative data will still learn the wrong thing.

## What is Classification?

Classification is a supervised ML task where the output is a category. The model asks: "Which class does this input belong to?"

Examples:

- **Email filtering:** spam or inbox.
- **Medical screening:** healthy, suspicious, or high-risk.
- **Modulation recognition:** BPSK, QPSK, 16-QAM, or OFDM.
- **Sentiment analysis:** positive, neutral, or negative.

The important point is that the output is discrete. If the output is a number such as temperature, price, or channel gain, that is regression rather than classification.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">Classification picture in words</div>
  <div className="grid gap-3 sm:grid-cols-3">
    <div className="rounded-lg border border-cyan-300/30 bg-cyan-400/10 p-3">Class A examples cluster together</div>
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">A decision boundary separates regions</div>
    <div className="rounded-lg border border-fuchsia-300/30 bg-fuchsia-400/10 p-3">Class B examples cluster elsewhere</div>
  </div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from beginner classification diagrams in Tpoint Tech/Javatpoint and scikit-learn supervised-learning documentation.</p>
</div>

## Types of Classification

### Binary Classification

There are only two possible classes.

Examples:

- Fraud or not fraud.
- Link blocked or link accepted.
- Tumor or normal tissue.

The model often outputs a probability first, such as 0.87. A threshold then converts that probability into a final class. If the threshold is 0.5, probability above 0.5 becomes class 1.

### Multi-Class Classification

There are more than two classes, but each example belongs to exactly one class.

Examples:

- A handwritten digit is one of 0, 1, 2, ..., 9.
- A modulation scheme is one of BPSK, QPSK, 8-PSK, 16-QAM, or 64-QAM.
- A document is one of sports, politics, business, or science.

### Multi-Label Classification

One example can have multiple labels at the same time.

Examples:

- A paper can be tagged as "machine learning", "wireless communication", and "optimization".
- A scene image can contain "car", "person", "road", and "building".
- A medical report can mention several conditions at once.

## How a Classification Model Makes a Decision

Most classifiers learn a **decision boundary**. This boundary separates one class from another in feature space.

For a simple two-feature problem, imagine a graph where the x-axis is signal-to-noise ratio and the y-axis is delay spread. A classifier may learn a line or curve that separates "good link" from "bad link." Real datasets have many more dimensions, but the idea is the same.

Good classifiers do not simply memorize points. They learn boundaries that are stable enough to handle new observations.

## Evaluation: Accuracy is Not Always Enough

Accuracy means the fraction of predictions that are correct. It is useful, but it can be misleading when classes are imbalanced.

Example: If only 1 percent of emails are spam, a model that always predicts "not spam" gets 99 percent accuracy while being useless for spam detection.

Better metrics:

- **Precision:** Out of the items predicted positive, how many were actually positive?
- **Recall:** Out of the actual positive items, how many did the model find?
- **F1-score:** A balance between precision and recall.
- **Confusion matrix:** A table showing correct and incorrect predictions per class.
- **ROC-AUC:** Measures how well a model ranks positives above negatives across thresholds.

## Common Classification Algorithms

- **Logistic Regression:** Fast, interpretable, and strong as a baseline.
- **K-Nearest Neighbors:** Simple and intuitive, but slow for large datasets.
- **Decision Tree:** Easy to explain, but can overfit.
- **Support Vector Machine:** Strong for high-dimensional data and margin-based separation.
- **Random Forest:** Many decision trees combined to reduce overfitting.
- **Gradient Boosting and XGBoost:** Sequential tree ensembles that often perform very well on tabular data.
- **Neural Networks:** Powerful for images, speech, text, and large complex datasets.

## A Minimal Python Classification Workflow

Most scikit-learn classifiers follow the same pattern: import the model, create it, fit it, predict, and evaluate it. The code below uses the built-in Iris dataset so it runs without downloading anything.

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

X, y = load_iris(return_X_y=True)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

model = make_pipeline(
    StandardScaler(),
    LogisticRegression(max_iter=1000)
)

model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))
```

The important idea is that the preprocessing and model are kept together in a `Pipeline`. That prevents mistakes where the training data is scaled differently from the test data.

## Common Beginner Mistakes

- Training and testing on the same data.
- Forgetting to scale features for algorithms such as KNN, SVM, and neural networks.
- Using accuracy only on imbalanced datasets.
- Making the model too complex for the amount of data.
- Ignoring data leakage, where information from the test set accidentally enters training.
- Thinking that a higher training score always means a better model.

## Takeaway

Machine learning is about learning useful patterns from examples. Classification is one of its most common tasks, where the goal is to assign an input to a category. A good classifier is not the one that memorizes the training data; it is the one that makes reliable predictions on new, unseen data.

## References and Further Reading

- T. M. Mitchell, *Machine Learning*, McGraw-Hill, 1997.
- C. M. Bishop, *Pattern Recognition and Machine Learning*, Springer, 2006.
- Scikit-learn documentation, ["Supervised learning"](https://scikit-learn.org/stable/supervised_learning.html).
- Tpoint Tech/Javatpoint, ["Classification Algorithm in Machine Learning"](https://www.tpointtech.com/classification-algorithm-in-machine-learning).
