# Use the official Node.js image as a base
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# Or if you're using Yarn, use this instead:
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# Or if you're using Yarn, use this instead:
# RUN yarn install

# Copy the rest of your application code
COPY . .

# Build the Next.js app
RUN npm run build
# Or if you're using Yarn, use this instead:
# RUN yarn build

# Use a minimal Node.js runtime image for production
FROM node:18-alpine AS runner

# Create a non-root user with a home directory
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Set the working directory inside the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app ./

# Change ownership of the app directory to the non-root user
RUN chown -R nextjs:nextjs /app

# Switch to the non-root user
USER nextjs

# Install only production dependencies
RUN npm install --production
# Or if you're using Yarn, use this instead:
# RUN yarn install --production

# Expose the port that your Next.js app runs on
EXPOSE 8080

# Set environment variable to ensure Next.js runs in production mode
ENV NODE_ENV=production

# Set the port environment variable for Next.js
ENV PORT=8080

# Start the Next.js app
CMD ["npm", "start"]
# Or if you're using Yarn, use this instead:
# CMD ["yarn", "start"]
