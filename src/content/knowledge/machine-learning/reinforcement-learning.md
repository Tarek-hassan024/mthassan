---
title: "Reinforcement Learning & DRL"
date: "2023-10-05"
order: 7
excerpt: "A clearer and deeper guide to reinforcement learning, value functions, policies, exploration, Q-learning, and deep RL."
---

## What is Reinforcement Learning?

Reinforcement Learning (RL) is about learning how to act. An agent interacts with an environment, takes actions, receives rewards, and gradually learns a strategy that produces high long-term reward.

Unlike supervised learning, the agent is not given the correct answer for every situation. It must learn from consequences.

Examples:

- A robot learns to walk.
- A game agent learns to win.
- A wireless controller learns channel access or power allocation.
- A vehicle learns safe merging behavior in simulation.

## The RL Loop

Every RL problem has a feedback loop:

1. The agent observes the current state.
2. The agent chooses an action.
3. The environment changes.
4. The agent receives a reward.
5. The agent observes the next state.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">Reinforcement-learning picture</div>
  <div className="font-mono text-xs text-white/75">agent -> action -> environment -> reward + next state -> agent</div>
  <p className="mt-3 text-xs text-white/60">Concept adapted from Tpoint Tech/Javatpoint reinforcement-learning diagrams and Sutton-Barto RL notation.</p>
</div>

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center leading-loose">
  State -> Agent -> Action -> Environment -> Reward + Next State
</div>

## Key Components

### Agent

The learner or decision maker.

Examples: robot, game-playing AI, scheduler, radio resource controller.

### Environment

The world the agent interacts with.

Examples: a game, a robot simulation, a wireless network, a traffic system.

### State

The information available to the agent at a given time.

Examples: robot joint positions, channel state, queue length, game screen, or vehicle speed.

### Action

The choice made by the agent.

Examples: move left, increase transmit power, select a beam, allocate a resource block.

### Reward

The feedback signal.

Examples: +1 for success, -1 for collision, high reward for throughput, penalty for energy use.

### Policy

The policy is the agent's behavior rule. It maps states to actions.

```text
policy: state -> action
```

The goal of RL is to learn a policy that maximizes long-term reward.

## Immediate Reward vs. Long-Term Return

RL is difficult because the best action now may not give the best immediate reward. The agent must think about future consequences.

Example:

- A robot may take a slow step now to avoid falling later.
- A network scheduler may serve a weaker user now to improve fairness over time.
- A game agent may sacrifice a piece now to win later.

The discounted return is a common way to value future rewards:

```text
return = r1 + gamma*r2 + gamma^2*r3 + ...
```

where `gamma` is the discount factor. A larger `gamma` makes the agent care more about future rewards.

## Exploration vs. Exploitation

The agent must balance two behaviors:

- **Exploration:** Try new actions to discover better strategies.
- **Exploitation:** Use the best-known action to collect reward.

If the agent only exploits, it may get stuck with a mediocre strategy. If it only explores, it may never use what it has learned.

Common exploration methods:

- Epsilon-greedy action selection.
- Softmax action selection.
- Upper confidence bound.
- Entropy bonuses in policy-gradient methods.

## Value Functions

A value function estimates how good a state or action is.

### State Value

The state value estimates the expected future reward from a state if the agent follows a policy.

```text
V(s) = expected return from state s
```

### Action Value

The action value estimates the expected future reward after taking action `a` in state `s`.

```text
Q(s, a) = expected return after action a in state s
```

Q-values are central to Q-learning and Deep Q-Networks.

## Q-Learning

Q-learning is a classic value-based RL algorithm. It learns a table of action values.

For each state-action pair, the agent updates its estimate using the reward received and the estimated value of the next state.

### Intuition

If an action leads to good future rewards, increase its Q-value. If it leads to bad outcomes, decrease its Q-value.

### Limitation

Q-learning works well when the state and action spaces are small. It becomes impractical when states are huge, such as raw images or continuous sensor readings.

## Policy Gradient Methods

Policy gradient methods learn the policy directly instead of learning a value table first.

### Intuition

If an action leads to high reward, make that action more likely in similar situations. If it leads to poor reward, make it less likely.

These methods are useful for continuous action spaces, such as robot control or power-control problems.

## Deep Reinforcement Learning

Deep Reinforcement Learning (DRL) combines neural networks with RL. The neural network approximates a policy, a value function, or both.

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700 text-center text-cyan-300">
  High-dimensional state -> Neural network -> Action or value estimate
</div>

The breakthrough result from DeepMind showed that a Deep Q-Network could learn to play Atari games directly from raw pixels. This connected representation learning with reinforcement learning at scale.

## Deep Q-Network

A Deep Q-Network (DQN) replaces the Q-table with a neural network.

### Key Ideas

- **Experience replay:** Store past transitions and sample them randomly during training.
- **Target network:** Use a slowly updated copy of the network to stabilize targets.
- **CNN feature extraction:** Learn useful representations from game images or other high-dimensional observations.

These ideas made value-based deep RL much more stable.

## Actor-Critic Methods

Actor-critic methods combine two models:

- **Actor:** Chooses actions.
- **Critic:** Estimates how good those actions are.

The critic helps the actor learn more efficiently. Many modern DRL methods are actor-critic variants.

## RL in Wireless and Communication Systems

RL is attractive in communication systems because many problems involve sequential decisions under uncertainty.

Examples:

- Beam selection.
- Power control.
- Spectrum access.
- Handover decisions.
- Edge computing offloading.
- RIS phase configuration.
- Resource allocation under changing traffic.

However, RL must be used carefully. Real wireless systems have safety, latency, sample-efficiency, and explainability constraints. Simulation-to-reality mismatch is also a major issue.

## Practical Challenges

- **Sample inefficiency:** RL may need many interactions.
- **Reward design:** A poorly designed reward can produce unwanted behavior.
- **Stability:** Training can be noisy or unstable.
- **Safety:** Exploration can be risky in real systems.
- **Generalization:** A policy trained in one environment may fail in another.
- **Evaluation:** Results should be tested across many random seeds and scenarios.

## Python: Minimal Q-Learning Table

This tiny example shows the skeleton of tabular Q-learning. It assumes you already have an environment with `reset()` and `step(action)` methods, like classic Gymnasium environments.

```python
import numpy as np

n_states = 16
n_actions = 4
q = np.zeros((n_states, n_actions))

alpha = 0.1
gamma = 0.99
epsilon = 0.1
rng = np.random.default_rng(42)

for episode in range(1000):
    state = env.reset()[0]
    done = False

    while not done:
        if rng.random() < epsilon:
            action = rng.integers(n_actions)
        else:
            action = np.argmax(q[state])

        next_state, reward, terminated, truncated, info = env.step(action)
        done = terminated or truncated

        best_next = np.max(q[next_state])
        q[state, action] += alpha * (
            reward + gamma * best_next - q[state, action]
        )

        state = next_state
```

## Python: Load a DRL Agent with Stable-Baselines3

For practical DRL, it is better to start with a tested library. Stable-Baselines3 provides implementations of DQN, PPO, A2C, SAC, TD3, and other algorithms.

```python
# pip install stable-baselines3 gymnasium

import gymnasium as gym
from stable_baselines3 import DQN

env = gym.make("CartPole-v1")

model = DQN(
    "MlpPolicy",
    env,
    learning_rate=1e-3,
    buffer_size=50_000,
    learning_starts=1_000,
    batch_size=32,
    gamma=0.99,
    verbose=1,
)

model.learn(total_timesteps=20_000)
model.save("dqn_cartpole")

loaded_model = DQN.load("dqn_cartpole", env=env)
obs, info = env.reset()

for _ in range(500):
    action, _ = loaded_model.predict(obs, deterministic=True)
    obs, reward, terminated, truncated, info = env.step(action)
    if terminated or truncated:
        obs, info = env.reset()
```

## Python: PPO for Continuous or More Stable Control

PPO is often a strong first choice because it is relatively stable across many environments.

```python
import gymnasium as gym
from stable_baselines3 import PPO

env = gym.make("CartPole-v1")

agent = PPO("MlpPolicy", env, verbose=1)
agent.learn(total_timesteps=20_000)

agent.save("ppo_cartpole")
```

For wireless-system research, the main work is usually not calling `DQN()` or `PPO()`. The hard part is designing the environment: state representation, action space, reward function, constraints, and realistic channel/network dynamics.

## Takeaway

Reinforcement learning is about learning actions from reward. Value-based methods estimate how good actions are, policy-gradient methods learn behavior directly, and deep RL uses neural networks for large or complex state spaces. It is powerful, but it needs careful reward design, reliable simulation, and strong evaluation.

## References and Further Reading

- R. S. Sutton and A. G. Barto, *Reinforcement Learning: An Introduction*, 2nd ed., MIT Press, 2018.
- V. Mnih et al., ["Human-level control through deep reinforcement learning"](https://doi.org/10.1038/nature14236), *Nature*, vol. 518, pp. 529-533, 2015.
- D. Silver et al., ["Mastering the game of Go with deep neural networks and tree search"](https://doi.org/10.1038/nature16961), *Nature*, vol. 529, pp. 484-489, 2016.
- Tpoint Tech/Javatpoint, ["Reinforcement Learning Tutorial"](https://www.tpointtech.com/reinforcement-learning).
- Stable-Baselines3 documentation, ["DQN"](https://stable-baselines3.readthedocs.io/en/master/modules/dqn.html).
