# Multi-stage Dockerfile for building an Astro static site and serving with nginx
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (prefer lockfile if present)
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm ci --silent || npm install --silent

# Copy source and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine

# Copy built static output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Simple healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- --timeout=2 http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
