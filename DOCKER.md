# Docker usage for Astrohost

This repository includes two Docker workflows:

* `Dockerfile` - produces a static nginx image by building the site and copying `dist/` into an nginx image. Use this only if you convert the site to a static output.
* `Dockerfile.ssr` - builds the project and runs the Node standalone server produced by `@astrojs/node` (recommended for this repo as it currently uses SSR and middleware).

Build and run the SSR image locally:

```bash
docker build -f Dockerfile.ssr -t astrohost:ssr .
docker run --rm -p 3000:3000 astrohost:ssr
# open http://localhost:3000
```

Using Docker Compose (builds `Dockerfile.ssr`):

```bash
docker-compose up --build -d
# open http://localhost:3000
```

Deploying to Coolify

* Coolify can build and deploy from this repo directly. Configure a new app and set the build command to `docker build -f Dockerfile.ssr -t astrohost:ssr .` or let Coolify detect the dockerfile and build automatically. Expose port `3000` and set environment variables (for example `PUBLIC_AUTH_ENABLED` for Clerk).

Deploying to AWS App Runner

1. Push the image to a container registry (ECR or Docker Hub):

```bash
# tag and push to Docker Hub example
docker build -f Dockerfile.ssr -t your-dockerhub-user/astrohost:ssr .
docker push your-dockerhub-user/astrohost:ssr
```

1. Create an App Runner service using that image (console or CLI). Configure the port to `3000` and set environment variables as needed. App Runner will run the container and manage scaling.

Deploying to AWS Fargate (ECS)

1. Push your image to ECR.
2. Create an ECS Task Definition that uses the image and sets the container port to `3000`.
3. Run the task on Fargate (create a service) and behind an Application Load Balancer if you need HTTP routing.

Notes and recommendations

* Use `Dockerfile.ssr` for this repo as it uses `@astrojs/node` and server middleware (`src/middleware.js`).
* If you prefer a static nginx workflow, change `astro.config.mjs` to remove the Node adapter and set `output: 'static'`, then use the existing `Dockerfile`.
* If you deploy to AWS using containers, prefer App Runner or Fargate over Lambda unless you specifically convert the app to a Lambda handler.

Local development reminder:

```bash
npm install
npm run dev
```

