---
title: "Deep Learning Architectures"
date: "2023-10-04"
order: 6
excerpt: "A look into Neural Networks (ANN, DNN, CNN, RNN) and how they mimic the human brain."
---

## What is Deep Learning?

**Deep Learning** is a highly specialized subfield of Machine Learning. While traditional machine learning relies on algorithms like Decision Trees or Linear Regression, Deep Learning is built entirely on **Artificial Neural Networks**—algorithms inspired by the structure and function of the human brain.

The word "Deep" simply refers to the number of layers in these neural networks. If a network has more than three layers (an input layer, an output layer, and multiple hidden layers), it is considered a "deep" neural network.

![Artificial Neural Network](https://upload.wikimedia.org/wikipedia/commons/e/e4/Artificial_neural_network.svg)

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center text-cyan-300">
  [Input Layer] ➡️ [Hidden Layer 1] ➡️ [Hidden Layer 2] ... ➡️ [Output Layer]
</div>

---

## Why Deep Learning?

For decades, traditional Machine Learning hit a performance plateau. No matter how much data you fed a traditional ML algorithm, it eventually stopped improving.

Deep Learning shattered this plateau. Deep learning models thrive on massive amounts of data. The more data you feed them, the smarter they get. This is why Deep Learning is the driving force behind the modern AI revolution, powering everything from ChatGPT to self-driving cars.

### Feature Extraction: The Secret Weapon
In traditional ML, a human engineer must manually extract "features" from data. If you want an AI to recognize a car, a human must write code telling the AI to look for circles (wheels) and rectangles (windows).

Deep Learning completely eliminates this step. You feed a Deep Learning model raw pixels, and it automatically figures out that circles and rectangles are important on its own.

---

## Core Architectures

There are several specialized types of neural networks designed for different types of data:

### 1. Artificial Neural Networks (ANN)
The foundational, "vanilla" neural network. It consists of an input layer, one or two hidden layers, and an output layer. 

![Artificial Neural Network](https://upload.wikimedia.org/wikipedia/commons/e/e4/Artificial_neural_network.svg)
*Image Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Artificial_neural_network.svg) (Public Domain)*

- **Use Case:** General tabular data (like CSV files or spreadsheets).
- **How it Works:** Every neuron in one layer is connected to every neuron in the next layer (fully connected). Data flows strictly forward.

### 2. Deep Neural Networks (DNN)
A DNN is simply an ANN that is incredibly "deep". While a standard ANN might have 1 or 2 hidden layers, a DNN can have dozens, hundreds, or even thousands of hidden layers!

- **Use Case:** Highly complex non-linear problems requiring massive feature extraction.
- **Why it matters:** The extreme depth allows the network to learn increasingly abstract features. The first layer might detect edges, the second detects shapes, the third detects a car wheel, and the fiftieth detects the entire car.

### 3. Convolutional Neural Networks (CNN)
The undisputed king of Computer Vision. CNNs are specifically designed to process grid-like data, such as images and video.

![Convolutional Neural Network](https://upload.wikimedia.org/wikipedia/commons/6/63/Typical_cnn.png)
*Image Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Typical_cnn.png) (CC BY-SA)*

- **Use Case:** Image recognition, facial recognition, self-driving car vision.
- **How it Works:** Instead of looking at the whole image at once, a CNN uses a sliding window (a "filter" or "kernel") that scans across the image pixel by pixel. This allows it to detect spatial patterns like edges, textures, and eyes, regardless of where they appear in the picture.

### 4. Recurrent Neural Networks (RNN)
Designed to process **sequential data**, where the order of data matters heavily (like words in a sentence or daily stock prices).

![Recurrent Neural Network](https://upload.wikimedia.org/wikipedia/commons/b/b5/Recurrent_neural_network_unfold.svg)
*Image Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Recurrent_neural_network_unfold.svg) (CC BY-SA)*

- **Use Case:** Speech recognition, text translation, and time-series forecasting.
- **How it Works:** Unlike ANNs where data flows straight through, an RNN has "loops". It remembers the output of the previous step and feeds it into the current step as input. This gives the network a form of short-term memory!

---

## The Cost of Deep Learning

While incredibly powerful, Deep Learning has two major drawbacks:
1. **Data Hungry:** They require millions of data points to become accurate.
2. **Compute Heavy:** Training a deep neural network requires massive amounts of processing power, heavily relying on high-end GPUs.
