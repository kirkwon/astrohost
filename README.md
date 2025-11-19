# A Brief History of Modern AI

This project is a personal blog built with Astro.js. It provides a historical overview of major advancements in AI and machine learning from 2010 to 2024.

## 🚀 Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

3.  **Open your browser** and visit [http://localhost:4321](http://localhost:4321)

## project-structure

*   `src/content/blog/`: Contains the Markdown files for blog posts.
*   `src/pages/`: Contains the Astro pages for the site.
*   `src/layouts/`: Contains the main layout for the site.
*   `src/components/`: Contains reusable Astro components.

## 🛠️ Technologies Used

*   [Astro](https://astro.build/)
*   [Tailwind CSS](https://tailwindcss.com/)

## Docker: Serving the site (nginx vs `astro preview`)


Which to use depends on how your site is built:

* **nginx (recommended for static sites):** If your Astro site builds down to static files (the default `npm run build` produces a `dist/` folder), serving those files with `nginx` is efficient, secure, and produces a small runtime image. The provided `Dockerfile` in this repo builds the site with Node then copies `dist/` into an `nginx` image to serve on port 80.

* **`astro preview` / Node (use when you need SSR or dynamic server features):** If your site uses server-side rendering, server routes, or needs runtime rendering, run the site with `astro preview` (or an adapter) inside a Node container. That requires a Node runtime and will typically be a larger image and slightly more complex deployment.

Examples

* Build and run the nginx image (static):

```bash
docker build -t astrohost:latest .
docker run --rm -p 8080:80 astrohost:latest
# open http://localhost:8080
```

* Run with `astro preview` (Node) — add a `preview` script to `package.json` if you don't have one:

```json
"scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
}
```

Then build and run a Node-based container that runs `npm run preview` (example):

```bash
# build the app (produces dist)
npm run build

# run locally with preview
npm run preview -- --port 3000
# or in Docker, run a Node image that runs `npm run preview` on container start
```

Recommendation

* Use **nginx** for production static sites for simplicity and performance.
* Use **`astro preview` or a Node-based server** only if you need SSR, dynamic routes, or middleware.

If you'd like, I can add an alternate `Dockerfile.preview` that runs `npm run preview` inside a Node image and a `docker-compose.preview.yml` for that workflow.
