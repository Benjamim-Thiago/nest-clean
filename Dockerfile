# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Install the NestJS CLI globally using npm
RUN npm install -g @nestjs/cli

# Expose any necessary ports
# EXPOSE 3000
# EXPOSE 8888
# EXPOSE 5555

# Your other Dockerfile commands, e.g., copying your application code
# COPY . .

# Define the command to start your application
# CMD ["npm", "start"]
