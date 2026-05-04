---
title: "Supervised, Unsupervised & Semi-Supervised"
date: "2023-10-03"
order: 2
excerpt: "A practical guide to the main ways machines learn from labeled, unlabeled, and partly labeled data."
---

Machine learning methods are often grouped by the kind of feedback available during training. The same dataset can lead to very different algorithms depending on whether the answers are known, hidden, partly known, or generated through interaction.

The main learning paradigms are:

- **Supervised learning:** Learn from examples with correct answers.
- **Unsupervised learning:** Find structure in data without correct answers.
- **Semi-supervised learning:** Combine a small labeled dataset with a larger unlabeled dataset.
- **Self-supervised learning:** Create training signals from the data itself.
- **Reinforcement learning:** Learn actions by trial, error, and reward.

This page focuses mainly on the first three because they are the foundation of most applied ML workflows.

## 1. Supervised Learning

Supervised learning is used when each training example has an input and a known output.

Example:

- Input: features extracted from an email.
- Label: spam or not spam.

The algorithm learns a mapping from input `X` to output `Y`.

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center text-green-300">
  Labeled data: (X, Y) -> Train model -> Predict Y for new X
</div>

### Two Main Supervised Tasks

**Classification** predicts a category.

Examples:

- Is this signal line-of-sight or non-line-of-sight?
- Is this image a cat, dog, or bird?
- Is this transaction fraudulent?

**Regression** predicts a continuous number.

Examples:

- Predict house price.
- Predict channel gain.
- Predict temperature.
- Predict battery lifetime.

### Strengths

- Usually easy to evaluate because correct answers exist.
- Often achieves high accuracy when labels are reliable.
- Many mature algorithms and tools are available.

### Limitations

- Labeled data can be expensive.
- Labels may be noisy or subjective.
- The model may fail when the deployment data differs from the training data.

## 2. Unsupervised Learning

Unsupervised learning is used when data has no labels. The goal is not to predict a known answer, but to discover structure.

Example:

- Input: customer purchase histories.
- Output: natural customer groups discovered by the algorithm.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">Unsupervised clustering picture</div>
  <div className="grid gap-3 sm:grid-cols-3">
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">Raw points have no names</div>
    <div className="rounded-lg border border-cyan-300/30 bg-cyan-400/10 p-3">Algorithm groups nearby points</div>
    <div className="rounded-lg border border-fuchsia-300/30 bg-fuchsia-400/10 p-3">Analyst interprets the clusters</div>
  </div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from Tpoint Tech/Javatpoint unsupervised-learning material and standard K-means explanations.</p>
</div>

### Common Unsupervised Tasks

**Clustering:** Group similar examples together.

Examples:

- Group wireless users by mobility pattern.
- Group customers by buying behavior.
- Group documents by topic.

**Dimensionality reduction:** Compress data while preserving important information.

Examples:

- Reduce hundreds of sensor features to two or three visualization axes.
- Remove redundant features before classification.
- Build compact embeddings for images or text.

**Anomaly detection:** Identify rare or unusual patterns.

Examples:

- Detect abnormal network traffic.
- Identify faulty sensor readings.
- Flag unusual medical measurements.

### Strengths

- Useful when labels are unavailable.
- Can reveal hidden patterns.
- Helpful for exploration and visualization.

### Limitations

- Evaluation is harder because there is no single correct answer.
- Clusters may not match human categories.
- Results can change depending on scaling, distance metric, and hyperparameters.

## 3. Semi-Supervised Learning

Semi-supervised learning is useful when a few labels are available but most data is unlabeled. This is common in medical imaging, wireless measurements, remote sensing, and speech data, where collecting raw data is easier than labeling it carefully.

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center text-cyan-300">
  Small labeled set + Large unlabeled set -> Better model than labeled data alone
</div>

### Why It Works

The unlabeled data can still reveal the shape of the input space. For example, if images form natural clusters, a few labels can help assign meaning to those clusters. The model uses the labeled data for guidance and the unlabeled data for structure.

### Common Semi-Supervised Techniques

- **Pseudo-labeling:** Train a model on labeled data, use it to label unlabeled data, then train again using confident predictions.
- **Consistency regularization:** Make the model produce similar predictions when the same input is slightly modified.
- **Graph-based methods:** Treat data points as nodes in a graph and spread labels through nearby points.
- **Teacher-student models:** A teacher model generates targets for a student model, often with confidence filtering.

### When It Helps

Semi-supervised learning is most useful when:

- Labels are expensive.
- Unlabeled data is abundant.
- The unlabeled data comes from the same distribution as the labeled data.
- The task has natural structure that unlabeled examples can reveal.

## 4. Self-Supervised Learning

Self-supervised learning creates labels from the data itself. It is widely used in modern deep learning.

Examples:

- Predict a missing word in a sentence.
- Predict the next frame in a video.
- Learn image representations by matching two augmented views of the same image.

The key idea is that the model learns useful representations before seeing task-specific labels. After that, it can be fine-tuned with fewer labeled examples.

## 5. Reinforcement Learning

Reinforcement learning is different because the model learns by interacting with an environment. It takes actions and receives rewards.

Examples:

- A robot learns to walk.
- A radio controller learns a resource-allocation policy.
- A game-playing agent learns strategies through self-play.

Unlike supervised learning, the agent is not told the correct action at every step. It must discover which actions produce good long-term outcomes.

## Choosing the Right Paradigm

| Situation | Good starting point |
|---|---|
| You have many labeled examples | Supervised learning |
| You have no labels and want patterns | Unsupervised learning |
| You have few labels and many unlabeled examples | Semi-supervised learning |
| You have huge raw data and want reusable features | Self-supervised learning |
| You need sequential decisions and rewards | Reinforcement learning |

## Python Examples for Each Paradigm

### Supervised Learning: Classifier

```python
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

clf = RandomForestClassifier(n_estimators=200, random_state=42)
clf.fit(X_train, y_train)

print(classification_report(y_test, clf.predict(X_test)))
```

### Supervised Learning: Regressor

```python
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

X, y = fetch_california_housing(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

reg = RandomForestRegressor(n_estimators=200, random_state=42)
reg.fit(X_train, y_train)

pred = reg.predict(X_test)
print("MAE:", mean_absolute_error(y_test, pred))
```

### Unsupervised Learning: Clustering

```python
from sklearn.datasets import load_iris
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

X, _ = load_iris(return_X_y=True)
X_scaled = StandardScaler().fit_transform(X)

kmeans = KMeans(n_clusters=3, random_state=42, n_init="auto")
cluster_id = kmeans.fit_predict(X_scaled)

print(cluster_id[:10])
```

### Semi-Supervised Learning: Label Spreading

```python
import numpy as np
from sklearn.datasets import load_iris
from sklearn.semi_supervised import LabelSpreading

X, y = load_iris(return_X_y=True)
rng = np.random.default_rng(42)

y_partial = np.full_like(y, fill_value=-1)
labeled_indices = rng.choice(len(y), size=20, replace=False)
y_partial[labeled_indices] = y[labeled_indices]

model = LabelSpreading()
model.fit(X, y_partial)

print(model.transduction_[:10])
```

## Takeaway

The learning paradigm is decided by the feedback available to the algorithm. If answers are known, use supervised learning. If answers are unknown, use unsupervised learning. If only a few answers are known, semi-supervised learning can use the unlabeled data to improve the model. For modern AI systems, self-supervised pretraining and reinforcement learning often appear on top of these foundations.

## References and Further Reading

- O. Chapelle, B. Scholkopf, and A. Zien, *Semi-Supervised Learning*, MIT Press, 2006.
- I. Goodfellow, Y. Bengio, and A. Courville, *Deep Learning*, MIT Press, 2016.
- R. S. Sutton and A. G. Barto, *Reinforcement Learning: An Introduction*, 2nd ed., MIT Press, 2018.
- Tpoint Tech/Javatpoint, ["Machine Learning Tutorial"](https://www.tpointtech.com/machine-learning).
- Scikit-learn documentation, ["Supervised learning"](https://scikit-learn.org/stable/supervised_learning.html).
