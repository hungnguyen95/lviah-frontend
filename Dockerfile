# Pull official base image
FROM node:15.11.0-alpine

# Set working directory
RUN mkdir /app

# Copy project to work directory
COPY . /app

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
RUN yarn install 
# RUN npm install react-scripts@4.0.3 -g --silent

# start app
CMD ["yarn", "start"]