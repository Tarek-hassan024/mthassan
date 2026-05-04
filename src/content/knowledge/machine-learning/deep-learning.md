---
title: "Deep Learning Architectures"
date: "2023-10-04"
order: 6
excerpt: "A clearer and deeper guide to neural networks, CNNs, RNNs, transformers, training, and practical limitations."
---

## What is Deep Learning?

Deep learning is a branch of machine learning based on neural networks with multiple layers. These layers learn representations of data. Early layers usually learn simple patterns, while deeper layers combine them into more abstract concepts.

For images, early layers may detect edges. Middle layers may detect shapes and textures. Deeper layers may detect objects. For language, early layers may learn local word patterns, while deeper layers learn meaning and context.

LeCun, Bengio, and Hinton described deep learning as using multiple processing layers to learn data representations with multiple levels of abstraction.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">Neural-network picture</div>
  <div className="font-mono text-xs text-white/75">input layer -> hidden layer(s) -> output layer</div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from Tpoint Tech/Javatpoint deep-learning and artificial-neural-network tutorials.</p>
</div>

## Why Deep Learning Became Powerful

Deep learning became dominant because three things arrived together:

- **Large datasets:** Images, text, speech, sensor data, and web-scale corpora.
- **Computation:** GPUs and distributed training made large neural networks practical.
- **Algorithmic improvements:** Better activation functions, initialization, normalization, optimization, and architectures.

Traditional ML often requires manual feature engineering. Deep learning can learn features directly from raw or lightly processed data.

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center text-cyan-300">
  Raw data -> Learned features -> Task-specific prediction
</div>

## The Neuron

A neuron receives inputs, multiplies them by weights, adds a bias, and passes the result through an activation function.

```text
output = activation(w1*x1 + w2*x2 + ... + b)
```

The activation function introduces non-linearity. Without non-linearity, stacking layers would still behave like one linear model.

Common activation functions:

- **Sigmoid:** Maps values to 0-1, but can suffer from vanishing gradients.
- **Tanh:** Maps values to -1 to 1.
- **ReLU:** Simple and widely used; outputs zero for negative inputs.
- **GELU:** Common in transformer models.

## 1. Artificial Neural Networks

An Artificial Neural Network (ANN), also called a multilayer perceptron when fully connected, is the basic neural network architecture.

### Best For

- Tabular data.
- Simple non-linear prediction.
- Baseline deep learning experiments.

### How It Works

Each neuron in one layer connects to neurons in the next layer. Information flows forward from input to output. During training, backpropagation computes gradients, and an optimizer updates the weights.

### Strengths

- Learns non-linear functions.
- Flexible and general.
- Easy to build compared with specialized networks.

### Weaknesses

- Does not naturally exploit image structure or sequence order.
- Can overfit small datasets.
- Requires scaling and careful training.

## 2. Deep Neural Networks

A Deep Neural Network (DNN) is an ANN with many hidden layers. Depth allows the model to learn hierarchical representations.

### Intuition

One layer learns simple combinations. Several layers can build more complex functions by composing simple ones.

Example for image recognition:

```text
pixels -> edges -> corners -> parts -> object
```

### Training Challenges

Deep networks can be hard to train because gradients may vanish, explode, or become noisy. Modern networks use tools such as:

- Careful initialization.
- ReLU or GELU activations.
- Batch normalization or layer normalization.
- Dropout.
- Residual connections.
- Adam or AdamW optimizers.

## 3. Convolutional Neural Networks

Convolutional Neural Networks (CNNs) are designed for grid-like data, especially images.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">CNN picture</div>
  <div className="font-mono text-xs text-white/75">image -> convolution filters -> pooling -> dense classifier</div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from Tpoint Tech/Javatpoint CNN image-classification material and CNN architecture tutorials.</p>
</div>

### Why CNNs Work Well for Images

Images have local structure. Nearby pixels are related. A CNN uses small filters that slide across the image and detect local patterns such as edges, textures, and corners.

### Main Components

- **Convolution:** Applies filters to detect patterns.
- **Activation:** Adds non-linearity.
- **Pooling:** Reduces spatial size and improves robustness.
- **Fully connected layer:** Uses learned features for final prediction.

### Best For

- Image classification.
- Object detection.
- Medical imaging.
- Remote sensing.
- Spectrogram and signal-pattern recognition.

## 4. Recurrent Neural Networks

Recurrent Neural Networks (RNNs) are designed for sequential data. They process one step at a time and maintain a hidden state that carries information from previous steps.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">RNN picture</div>
  <div className="font-mono text-xs text-white/75">x1 -> hidden state -> x2 -> hidden state -> x3 -> output</div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from standard recurrent-network diagrams and Tpoint Tech/Javatpoint neural-network material.</p>
</div>

### Best For

- Time series.
- Speech.
- Sensor streams.
- Sequential control signals.

### Limitations

Standard RNNs struggle with long-range dependencies. LSTM and GRU architectures were designed to remember information for longer periods, but transformers now dominate many sequence modeling tasks.

## 5. Transformers

Transformers are neural networks built around attention mechanisms. Instead of processing a sequence strictly step by step, attention allows the model to compare each token with other tokens directly.

### Why Attention Matters

In a sentence, the meaning of one word may depend on another word far away. Attention helps the model decide which parts of the input are most relevant.

### Best For

- Language models.
- Machine translation.
- Text classification.
- Vision transformers.
- Multimodal models combining text, images, and audio.

## Training a Deep Network

The training loop is usually:

1. Send a batch of data through the network.
2. Compute the loss.
3. Use backpropagation to compute gradients.
4. Update weights using an optimizer.
5. Repeat over many batches and epochs.

Backpropagation became a key foundation for modern neural networks after the work of Rumelhart, Hinton, and Williams in 1986.

## Regularization

Deep networks can memorize training data. Regularization helps them generalize.

Common techniques:

- **Dropout:** Randomly disables neurons during training.
- **Weight decay:** Penalizes overly large weights.
- **Data augmentation:** Creates modified training examples.
- **Early stopping:** Stops training when validation performance stops improving.
- **Batch/layer normalization:** Stabilizes training.

## When Deep Learning is a Good Choice

Deep learning is usually strong when:

- The dataset is large.
- The input is complex, such as image, audio, text, or raw signal data.
- Manual feature engineering is difficult.
- High predictive performance is more important than simple interpretability.

It may not be the best first choice when:

- The dataset is small.
- Interpretability is the main requirement.
- The problem is simple tabular prediction.
- Compute resources are limited.

## Python: Load a DNN with Keras

Use a DNN when your features are tabular or already converted into numeric vectors. The `Sequential` API is the simplest way to stack layers.

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Input(shape=(20,)),
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.2),
    layers.Dense(32, activation="relu"),
    layers.Dense(1, activation="sigmoid"),
])

model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy"]
)

# X_train shape: (samples, 20), y_train shape: (samples,)
# model.fit(X_train, y_train, validation_split=0.2, epochs=20, batch_size=32)
```

## Python: Load a CNN for Image Classification

CNNs expect image-like tensors. For RGB images of size 128 x 128, the input shape is `(128, 128, 3)`.

```python
from tensorflow import keras
from tensorflow.keras import layers

cnn = keras.Sequential([
    layers.Input(shape=(128, 128, 3)),
    layers.Rescaling(1.0 / 255),
    layers.Conv2D(32, 3, activation="relu"),
    layers.MaxPooling2D(),
    layers.Conv2D(64, 3, activation="relu"),
    layers.MaxPooling2D(),
    layers.Flatten(),
    layers.Dense(128, activation="relu"),
    layers.Dense(10, activation="softmax"),
])

cnn.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)
```

## Python: Load an RNN/LSTM for Sequence Data

For sequence data, the input shape is usually `(time_steps, features_per_step)`.

```python
from tensorflow import keras
from tensorflow.keras import layers

lstm_model = keras.Sequential([
    layers.Input(shape=(50, 8)),
    layers.LSTM(64),
    layers.Dense(32, activation="relu"),
    layers.Dense(1),
])

lstm_model.compile(
    optimizer="adam",
    loss="mse",
    metrics=["mae"]
)
```

## Python: Save and Load a Deep Learning Model

```python
model.save("dnn_model.keras")

loaded_model = keras.models.load_model("dnn_model.keras")
# predictions = loaded_model.predict(X_test)
```

For real projects, keep preprocessing with the model or document it carefully. A neural network trained on normalized data will perform badly if deployed on raw unnormalized data.

## Takeaway

Deep learning learns layered representations. CNNs are strong for images and grid-like data, RNNs model sequences, and transformers use attention for long-range context. The power of deep learning comes from representation learning, but that power requires data, computation, regularization, and careful evaluation.

## References and Further Reading

- Y. LeCun, Y. Bengio, and G. Hinton, ["Deep learning"](https://doi.org/10.1038/nature14539), *Nature*, vol. 521, pp. 436-444, 2015.
- I. Goodfellow, Y. Bengio, and A. Courville, *Deep Learning*, MIT Press, 2016.
- D. E. Rumelhart, G. E. Hinton, and R. J. Williams, ["Learning representations by back-propagating errors"](https://doi.org/10.1038/323533a0), *Nature*, vol. 323, pp. 533-536, 1986.
- A. Vaswani et al., ["Attention Is All You Need"](https://arxiv.org/abs/1706.03762), arXiv:1706.03762, 2017.
- Tpoint Tech/Javatpoint, ["Deep Learning Tutorial"](https://www.tpointtech.com/deep-learning).
- Tpoint Tech/Javatpoint, ["Artificial Neural Network"](https://www.tpointtech.com/artificial-neural-network).
- Tpoint Tech/Javatpoint, ["Image Classification Using CNN"](https://www.tpointtech.com/image-classification-using-cnn).
- Keras documentation, ["The Sequential model"](https://keras.io/guides/sequential_model/).
