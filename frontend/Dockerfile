FROM node:25-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app

# Build stage
FROM node:25-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .


FROM base AS development
ENV NODE_ENV=development
COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R node:node /app
USER node
CMD ["npm", "run", "dev", "--host", "0.0.0.0"]

