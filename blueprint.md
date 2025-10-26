# Project Blueprint

## Overview

This project is a personal blog built with Astro.js. It provides a historical overview of major advancements in AI and machine learning from 2010 to 2024.

## Project Structure

*   `src/content/blog/`: Contains the Markdown files for blog posts.
*   `src/pages/`: Contains the Astro pages for the site.
*   `src/layouts/`: Contains the main layout for the site.
*   `src/components/`: Contains reusable Astro components.

## Content: A Brief History of Modern AI

A series of blog posts documenting the major advancements in AI and machine learning from 2010 to 2024. Each post covers a specific year and a key development.

*   **2010:** The convergence of big data, powerful computing, and algorithmic innovation.
*   **2011:** The role of GPUs in supercharging deep learning.
*   **2012:** AlexNet and the ImageNet revolution.
*   **2013:** Word2Vec and the dawn of language embeddings.
*   **2014:** GANs and the rise of generative models.
*   **2015:** ResNets and the quest for deeper networks.
*   **2016:** AlphaGo and the triumph of deep reinforcement learning.
*   **2017:** The Transformer architecture.
*   **2018:** BERT and the era of pre-trained language models.
*   **2019:** The language model arms race.
*   **2020:** GPT-3 and the power of few-shot learning.
*   **2021:** AlphaFold 2 and the protein folding problem.
*   **2022:** The rise of text-to-image models.
*   **2023:** The year of the open-source LLM.
*   **2024:** The rise of multimodal AI.

## Frontend Development

*   **Component-Based UI:** The user interface is built with reusable Astro components.
    *   `src/components/Header.astro`: A consistent header with the site title and a theme toggle button.
    *   `src/components/Footer.astro`: A consistent footer with a copyright notice.
    *   `src/components/Card.astro`: A card component to display a summary of each blog post on the home page.
*   **Layout:** A main layout file (`src/layouts/Layout.astro`) is used to provide a consistent structure and appearance to all pages.
*   **Home Page:** The home page (`src/pages/index.astro`) displays a grid of blog post cards, sorted with the most recent posts first.
*   **Styling:** The project uses Tailwind CSS for styling.
    *   The `@tailwindcss/typography` plugin is used to style the content of the blog posts, making them more readable and visually appealing.
    *   A theme toggle allows users to switch between light and dark modes.

## Current Plan: Deployment

The application is now complete. I will now deploy the application to Firebase Hosting.
