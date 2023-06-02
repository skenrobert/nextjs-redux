# nextjs-redux
 
# the configuration is next:

## create folder redux (src/redux)
* store.ts  (here will be state, all value for the application)
* providers.tsx (component father for the application)
* hooks.ts (all hooks declared)
* services (all petitions for servers)
* features (function change the state store.ts)

# In developer Braches is the Dockerfile for the test with  **[DOCKER](https://docs.docker.com/desktop/install/debian/):**

# Build Stage

FROM node:16-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# Production Stage

FROM node:16-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
