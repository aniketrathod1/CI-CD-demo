# Base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

