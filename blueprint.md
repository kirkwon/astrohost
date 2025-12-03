# Project Blueprint

## Overview

This project is a static-first web application built with Astro.js. It is designed to be a fast, highly-performant, and scalable site that delivers minimal JavaScript by default, ensuring an exceptional user experience and top-tier Core Web Vitals. The website includes a blog detailing the history of AI.

## Implemented Features

*   **Astro.js Framework:** Core of the project.
*   **Tailwind CSS:** For styling.
*   **File-based routing:** For pages and blog posts.
*   **Blog:** A collection of markdown files detailing the history of AI from 2010 to 2024.
*   **Responsive Design:** The website is designed to work on various screen sizes.
*   **AI Voice Agent:** A new page (`/agent`) featuring an AI voice agent that can answer questions about the history of AI based on the content of the existing blog posts. The agent includes a chat interface, speech recognition for input, and text-to-speech for responses.

## Resolved Issues

*   **LangChain Dependency Conflicts:** Addressed multiple issues related to `langchain` module resolution and version conflicts during the build and runtime. This involved: 
    *   Updating `@langchain` package versions in `package.json` to ensure compatibility.
    *   Correcting import paths in `src/pages/api/chat.js` to align with `langchain`'s modular structure.
    *   Performing several rounds of `npm install` (with `--force` and cleanups) to resolve dependency tree issues.
    *   Adjusting `astro.config.mjs`'s `vite.build.rollupOptions.external` to correctly handle `langchain` modules during server-side bundling.
*   **OpenAI API Key Not Found (Typo):** Corrected a typo in `src/pages/api/chat.js` where `openAIAIApiKey` was used instead of `openAIApiKey`, preventing the OpenAI API key from being read correctly from environment variables.

## Current Plan: AI Voice Agent

All planned features for the AI voice agent have been implemented and tested locally. The agent should now be fully functional. No further steps are planned at this time.
