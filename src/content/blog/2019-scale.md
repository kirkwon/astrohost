---
title: '2019: The Year of the Language Model Arms Race'
description: 'A look at the trend towards ever-larger language models.'
pubDate: 2019-02-14
---

## The Size Obsession

By February 2019, the NLP community had caught **BERT Fever**. Every researcher wanted to build a better BERT. But how? **Scale**. Suddenly, it wasn't enough to beat the previous state-of-the-art by 1% or 2%—researchers were adding **hundreds of millions of parameters** to squeeze out incremental improvements. The race was on: **who could build the largest language model?** OpenAI's GPT had 117 million parameters. BERT Large had 340 million. Then came **GPT-2** with 1.5 billion parameters—a 10x jump that stunned the AI world. But that was just the beginning. Within months, Microsoft's **Turing Natural Language Generation (T-NLG)** hit **17 billion** parameters. Then **Megatron-LM** from NVIDIA: **8 billion parameters**. Then **T5** hit **11 billion**. The numbers were getting absurd. And then **GPT-2** was expanded to **15 billion**.

## The Million Dollar Question

Here's what everyone wanted to know: **Does size matter?** The early evidence was... **complicated**. A 15-billion parameter model didn't seem 10x better than a 1.5-billion parameter model. It was "just" noticeably better. But the more researchers trained, the clearer it became: **scale unlocked emergent capabilities**. Smaller models couldn't handle long-range dependencies. Medium models couldn't do complex reasoning. Large models started showing **in-context learning**—the ability to learn new tasks from just a few examples, without any parameter updates. It was like watching a pile of sand turn into a castle as you add more grains—the transformation isn't gradual; it's **sudden and dramatic**.

## The Deep Mind Experiment

In the summer of 2019, **OpenAI** decided to answer the size question once and for all. They ran a massive experiment: train models ranging from 125 million parameters to 175 billion parameters (GPT-3), and carefully measure how performance changes with scale. The results were **bizarre**. Performance didn't improve linearly—it improved **predictably but slowly**, then **suddenly and dramatically**. The 13-billion parameter model was decent. The 175-billion parameter model was **mind-blowingly capable**. It could write essays, solve math problems, translate languages, and even generate code. It wasn't just a bigger version of smaller models—it was a **different beast entirely**. This was **emergence**: the idea that scale doesn't just improve existing capabilities—it **creates new ones**.

## The Foundation Model Revolution

The arms race did more than produce bigger models—it **reframed** the entire field. Researchers stopped thinking about building models for specific tasks and started thinking about **foundation models**—massive general-purpose models that could be adapted to countless applications. The logic was seductive: instead of building a specialized translation model, a specialized question-answering model, and a specialized summarization model, why not build **one massive model** that could do all three? It was like the difference between hiring a handyman, a plumber, an electrician, and a carpenter—versus hiring **one person who can do everything reasonably well**. The foundation model approach promised **unprecedented flexibility** at the cost of **unprecedented compute**.

## The Unintended Consequences

By the end of 2019, the size race had raised uncomfortable questions. If bigger models required $5 million+ to train, who could afford to build them? OpenAI, Google, Microsoft, and NVIDIA. Everyone else was locked out. Worse, **no one fully understood** why these models worked so well. They were black boxes learning patterns from trillions of words, and those patterns sometimes produced biased, toxic, or factually incorrect outputs. The arms race had created the **most capable AI systems ever built**—but also the most **opaque** and **uncontrollable**. The future belonged to the biggest players with the deepest pockets. The question was: was that a good thing?
