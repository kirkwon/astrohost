---
title: '2015: ResNets and the Quest for Deeper Networks'
description: 'How residual networks made it possible to train incredibly deep neural networks.'
pubDate: 2015-12-10
---

## Going Deeper

By 2015, the deep learning community had embraced the idea that deeper networks were better networks. However, as networks got deeper, a new problem emerged: the **vanishing gradient problem**. As the gradients were backpropagated through the network, they would become smaller and smaller, until they were too small to be useful for training.

### The Residual Trick

A team of researchers at Microsoft Research, led by Kaiming He, introduced a simple but brilliant solution to this problem: the **Residual Network (ResNet)**. ResNets introduced the concept of **skip connections**, which allow the gradient to flow directly from one layer to a much deeper layer, bypassing the layers in between. This simple trick made it possible to train networks that were hundreds or even thousands of layers deep.

ResNets were a major breakthrough in the field of deep learning, and they have become the standard architecture for a wide range of computer vision tasks.
