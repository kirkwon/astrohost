# Astro.js AI Blog & Portfolio Blueprint

## 1. Project Overview

This project is a modern, content-focused website built with Astro.js. It serves as a personal blog and portfolio, showcasing articles about AI and personal information about the creator. The site is designed to be highly performant, visually engaging, and easily maintainable, leveraging Astro's "Islands Architecture" for optimal loading speeds. The design is clean, modern, and includes subtle animations and interactive elements to enhance the user experience.

## 2. Project Outline & Features

This document outlines all the styles, designs, and features implemented in the application.

### 2.1. Core Structure & Technology
*   **Framework:** Astro.js
*   **Styling:** Tailwind CSS with a custom color palette defined in `src/styles/global.css`. Supports both light and dark modes.
*   **Content:** Blog posts are managed as Markdown files in `src/content/blog/`.
*   **Routing:** File-based routing via the `src/pages/` directory.

### 2.2. Implemented Pages
*   **Homepage (`/`):**
    *   Displays a hero section with an animated title and description.
    *   Features a timeline navigation linking to blog posts by year.
    *   Presents blog posts in a card-based grid layout.
*   **About Page (`/about`):**
    *   Features a two-column layout.
    *   Left column contains a profile picture, name, title, and social media links.
    *   Right column contains biographical information, including "About Me," "My Journey," and "Beyond the Code" sections.
*   **Blog Post Pages (`/blog/[slug]`):**
    *   Dynamically generated pages for each Markdown blog post.
    *   Displays post content with a clean, readable layout.

### 2.3. Design & UX Enhancements
*   **Animations:**
    *   **Scroll-based Fade-in:** Blog post cards and "About Me" page content fade in as the user scrolls.
    *   **Staggered Animation:** Blog post cards animate in a staggered "domino" sequence.
    *   **Hero Text Animation:** The main heading on the homepage animates on page load.
*   **Interactive Effects:**
    *   **Glow on Hover:** Timeline navigation buttons and social media icons feature an interactive glow effect on mouse hover.
*   **Typography:**
    *   Uses a clean, modern font stack with a clear visual hierarchy. Font sizes are responsive for different screen sizes.

---

## 3. Current Plan: Enhance "Beyond the Code" Section

This section outlines the plan for the current requested change.

**Goal:** Transform the "Beyond the Code" section on the "About Me" page from a simple text block into a visually engaging, three-column layout that showcases hobbies and interests.

**Steps:**

1.  **Update `about.astro`:** Modify the page to replace the current "Beyond the Code" paragraph with a new grid structure.
2.  **Create Three Columns:** Implement a three-column layout. Each column will represent a hobby mentioned in the text: Generative Art, Photography, and Cooking.
3.  **Add Visuals:** Each column will feature a relevant, high-quality, and freely-licensed image to visually represent the hobby.
4.  **Add Descriptive Text:** Below each image, a short, descriptive text will provide context, derived from the original paragraph.
5.  **Apply Styling:** Ensure the new section is well-styled, responsive, and visually consistent with the rest of the site design. The scroll-animation will be applied to the new section as a whole.
