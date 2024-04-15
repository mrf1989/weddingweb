FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY public ./public
COPY src ./src
COPY index.js .

EXPOSE 3000

CMD npm start