---
title: "Regression Algorithms"
date: "2023-10-07"
order: 5
excerpt: "A deeper explanation of regression models for predicting continuous values, with intuition, assumptions, and practical guidance."
---

## What is Regression?

Regression is a supervised learning task where the target is a continuous numerical value. Instead of predicting a class such as "spam" or "not spam", a regression model predicts a quantity.

Examples:

- House price in pounds.
- Temperature tomorrow.
- Received signal strength.
- Localization error in meters.
- Battery lifetime in hours.

The central question is: "Given these input features, what number should the model predict?"

## Regression vs. Classification

| Question | Task |
|---|---|
| Is this email spam? | Classification |
| What is the price of this house? | Regression |
| Which modulation type is this? | Classification |
| What is the expected channel gain? | Regression |

## 1. Linear Regression

Linear regression is the simplest and most interpretable regression model. It assumes the output can be approximated by a weighted sum of the input features.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">Linear regression picture</div>
  <div className="font-mono text-xs text-white/75">observed points -> best-fit line -> numeric prediction</div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from Tpoint Tech/Javatpoint linear-regression explanations and standard regression diagrams.</p>
</div>

### Intuition

For one feature:

```text
prediction = slope * input + intercept
```

For many features:

```text
prediction = w1*x1 + w2*x2 + ... + b
```

Training finds weights that minimize the difference between predicted and true values, often using mean squared error.

### Strengths

- Very fast.
- Easy to interpret.
- Good baseline.
- Can extrapolate outside the training range.

### Weaknesses

- Assumes a mostly linear relationship.
- Sensitive to outliers.
- Cannot naturally model complex feature interactions.

### Best Use Cases

- Quick baselines.
- Scientific modeling where interpretability matters.
- Problems with approximately linear relationships.

## 2. Ridge and Lasso Regression

Ridge and Lasso are regularized versions of linear regression. They add a penalty to discourage overly large weights.

### Ridge Regression

Ridge uses an L2 penalty. It shrinks weights smoothly and is useful when many features are correlated.

### Lasso Regression

Lasso uses an L1 penalty. It can push some weights exactly to zero, which makes it useful for feature selection.

### Why Regularization Matters

Without regularization, a model may fit noise in the training data. Regularization makes the model simpler and often improves generalization.

## 3. K-Nearest Neighbors Regressor

KNN regression predicts a number by averaging the target values of nearby training examples.

### Intuition

If a new house is similar to five nearby houses in the dataset, KNN predicts the average price of those five houses.

### Strengths

- Simple and non-parametric.
- Can model non-linear relationships.
- No explicit training phase.

### Weaknesses

- Slow prediction for large datasets.
- Sensitive to feature scaling.
- Performs poorly when irrelevant features dominate distance.

### Best Use Cases

- Small datasets.
- Local interpolation problems.
- Situations where similar inputs should have similar outputs.

## 4. Polynomial Regression

Polynomial regression extends linear regression by adding powers of features, such as `x^2`, `x^3`, and interactions.

### Intuition

A straight line cannot fit a curved trend. Polynomial features allow a linear model to fit curves.

```text
y = b + w1*x + w2*x^2 + w3*x^3
```

### Strengths

- Captures simple curves.
- Still relatively interpretable.
- Easy to implement.

### Weaknesses

- High-degree polynomials can overfit badly.
- Extrapolation can become unrealistic.
- Feature scaling becomes important.

## 5. Support Vector Regression

Support Vector Regression (SVR) is related to SVM classification. Instead of separating classes, it tries to fit a function while ignoring small errors inside a margin.

### Intuition

SVR draws a tube around the prediction function. Errors inside the tube are acceptable. The model focuses mainly on points outside the tube.

### Strengths

- Robust to small noise.
- Kernel functions allow non-linear regression.
- Useful for medium-sized datasets.

### Weaknesses

- Can be slow for large datasets.
- Requires tuning kernel, margin, and regularization parameters.
- Less interpretable than linear regression.

## 6. Decision Tree Regressor

A decision tree regressor splits the feature space into regions and predicts the average target value in each region.

### Intuition

For house prices, a tree may first split by location, then by area, then by number of rooms. Each final leaf stores an average price.

### Strengths

- Handles non-linear relationships.
- Easy to visualize.
- Minimal preprocessing.

### Weaknesses

- Can overfit if too deep.
- Predictions are piecewise constant.
- Single trees are unstable.

## 7. Random Forest Regressor

Random forest regression averages predictions from many decision trees.

### Intuition

Each tree makes a different estimate. Averaging many trees reduces variance and gives a more stable prediction.

### Strengths

- Strong tabular-data baseline.
- Handles feature interactions.
- Less overfitting than one decision tree.
- Works with minimal preprocessing.

### Weaknesses

- Less interpretable than one tree.
- Cannot extrapolate beyond the training target range.
- Larger memory footprint.

## 8. Gradient Boosting and XGBoost Regressor

Gradient boosting builds trees sequentially. Each new tree learns to correct the residual errors of the current model.

### Intuition

If the model underpredicts one group of samples, the next tree focuses on reducing that underprediction. Over many rounds, the model becomes a strong predictor.

### Strengths

- Often excellent on structured data.
- Captures non-linear relationships.
- Works well with mixed feature types.
- XGBoost adds regularization and scalable training.

### Weaknesses

- Needs careful tuning.
- Can overfit if trees are too deep or learning rate is too large.
- Training is more sequential than random forest.

## Regression Metrics

### Mean Absolute Error

Mean Absolute Error (MAE) is the average absolute difference between prediction and true value. It is easy to interpret because it uses the same unit as the target.

### Mean Squared Error

Mean Squared Error (MSE) squares the errors before averaging. Large errors are punished more strongly.

### Root Mean Squared Error

Root Mean Squared Error (RMSE) is the square root of MSE. It is also in the same unit as the target.

### R-squared

R-squared measures how much variance in the target is explained by the model. It is useful, but it should not be the only metric.

## Practical Checklist

- Plot predicted values vs. true values.
- Check residuals for patterns.
- Scale features for KNN, SVR, linear models, and neural networks.
- Use cross-validation when data is limited.
- Compare against a simple baseline, such as predicting the mean.
- Watch out for outliers, data leakage, and target leakage.

## Python: Load Common Regressors

Regressors follow the same scikit-learn pattern as classifiers:

- `fit(X_train, y_train)` learns the mapping.
- `predict(X_test)` returns continuous values.
- Metrics such as MAE, RMSE, and R-squared evaluate the predictions.

```python
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.neighbors import KNeighborsRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.svm import SVR
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor

regressors = {
    "linear": LinearRegression(),
    "ridge": Ridge(alpha=1.0),
    "lasso": Lasso(alpha=0.01),
    "knn": KNeighborsRegressor(n_neighbors=5),
    "decision_tree": DecisionTreeRegressor(max_depth=6, random_state=42),
    "svr": SVR(kernel="rbf"),
    "random_forest": RandomForestRegressor(n_estimators=200, random_state=42),
    "gradient_boosting": GradientBoostingRegressor(random_state=42),
}
```

## Python: Compare Regressors on One Dataset

```python
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_absolute_error, r2_score

X, y = fetch_california_housing(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

for name, reg in regressors.items():
    model = make_pipeline(StandardScaler(), reg)
    model.fit(X_train, y_train)
    pred = model.predict(X_test)

    print(
        name,
        "MAE=", round(mean_absolute_error(y_test, pred), 3),
        "R2=", round(r2_score(y_test, pred), 3),
    )
```

## Python: Save and Load a Regressor

```python
import joblib

final_regressor = RandomForestRegressor(
    n_estimators=300,
    max_depth=None,
    random_state=42,
    n_jobs=-1
)
final_regressor.fit(X_train, y_train)

joblib.dump(final_regressor, "regressor.joblib")

loaded_regressor = joblib.load("regressor.joblib")
print(loaded_regressor.predict(X_test[:5]))
```

## Takeaway

Regression predicts numbers. Linear models are fast and interpretable, tree ensembles are strong for tabular data, and kernel or neural methods help with complex non-linear patterns. The best model depends on the data shape, required interpretability, and error cost.

## References and Further Reading

- T. Hastie, R. Tibshirani, and J. Friedman, *The Elements of Statistical Learning*, 2nd ed., Springer, 2009.
- J. H. Friedman, ["Greedy Function Approximation: A Gradient Boosting Machine"](https://doi.org/10.1214/aos/1013203451), *The Annals of Statistics*, vol. 29, no. 5, pp. 1189-1232, 2001.
- T. Chen and C. Guestrin, ["XGBoost: A Scalable Tree Boosting System"](https://doi.org/10.1145/2939672.2939785), *Proceedings of ACM SIGKDD*, San Francisco, CA, USA, 2016, pp. 785-794.
- Tpoint Tech/Javatpoint, ["Linear Regression in Machine Learning"](https://www.tpointtech.com/linear-regression-in-machine-learning).
- Scikit-learn documentation, ["RandomForestRegressor"](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html).
