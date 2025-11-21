---
title: '2015: ResNets and the Quest for Deeper Networks 📉'
description: 'How residual networks made it possible to train incredibly deep neural networks.'
pubDate: 2015-12-10
---

## The Deeper is Better Fallacy 🕳️

By 2015, the mantra in deep learning was simple: **deeper is better**. Every major research group was in an arms race to build the deepest network possible. First came networks with 8 layers, then 16, then 32. The theory was seductive: each layer could learn increasingly complex features, from edges to textures to shapes to objects. But there was a problem that nobody could solve: the **vanishing gradient problem**. As you added more layers, training became slower, less stable, and often **worse**. A 20-layer network performed worse than a 10-layer network. A 30-layer network barely learned anything at all. It was as if the network was developing amnesia as it got deeper—information from the input would fade away before reaching the end.

## The Breakthrough Moment 💡

At Microsoft Research, a Chinese computer vision researcher named **Kaiming He** was obsessed with this problem. After months of failed experiments, he had a radical idea: **what if we stopped trying to force information through every layer, and instead let it take shortcuts?** He designed networks with **skip connections**—paths that allowed information to jump directly from early layers to deep layers, bypassing the layers in between. But here's the genius part: instead of just adding extra paths, he reformulated the problem. Instead of learning the function **F(x)** directly (which maps input to output), the network would learn the **residual**: **F(x) = desired output - x**. Then it would add the input back: **output = F(x) + x**. This tiny mathematical tweak changed everything.

## The 152-Layer Surprise 😲

When He and his team published **ResNet** in December 2015, the AI world was stunned. They demonstrated networks with **152 layers**—more than 10x deeper than anything trained before. But these weren't just deep; they were **better**. Much better. ResNet-152 crushed the competition on ImageNet, achieving record-breaking performance that stunned even the researchers themselves. The secret? The skip connections allowed gradients to flow directly from output to input, solving the vanishing gradient problem once and for all. But more importantly, ResNets were **more efficient** and **easier to train** than their shallower predecessors. It was the architectural equivalent of discovering that adding express lanes to a highway doesn't just make it faster—it makes it less congested.

## The Simplicity Paradox 🧩

Here's what's remarkable about ResNet: it was **simpler** than what came before. Researchers had been trying to solve the vanishing gradient problem with increasingly complex architectural gymnastics—recurrent connections, layer normalization, fancy initialization schemes. He did the opposite: he made the network architecture **simpler**, not more complex. The paper's key equation could be written on a napkin: **output = F(x) + x**. That's it. Yet this simple addition symbol unlocked possibilities that had seemed impossible just months before. It turns out that sometimes the most profound innovations look obvious in hindsight.

## The Deep Learning Revolution 🚀

ResNet didn't just set a record—it **reset the entire field**. Once researchers realized that depth was now feasible, networks exploded in size. In 2016, **ResNet-1000** was trained. In 2017, networks reached **1,000+ layers**. But ResNet's impact went beyond depth: the idea of **skip connections** or **residual learning** became a fundamental building block in virtually every deep learning architecture that followed. **Transformers** use residual connections. **U-Nets** use skip connections. **DenseNets** use dense skip connections. The insight that "deeper isn't just more—it's **better**" reshaped how we thought about neural architecture. In 2015, we proved that **150 layers** wasn't the limit—it was just the beginning. The question wasn't whether we could go deeper, but how deep we wanted to go.
