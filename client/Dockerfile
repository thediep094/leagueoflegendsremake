FROM node:16.15.0
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "start:prod"]