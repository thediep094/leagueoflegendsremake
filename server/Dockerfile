FROM node:16.15.0
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
