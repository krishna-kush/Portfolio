# Dockerfile for package.json
# Stage 1: Build the React application
FROM node:16-alpine AS builder

WORKDIR /app
# Copy package files first to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies including devDependencies for build
RUN yarn install --frozen-lockfile

# Copy all source files
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the built assets using Nginx
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]