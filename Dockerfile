FROM node:stretch-slim

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY build/. .

EXPOSE 8080 8090

CMD ["node", "server.js"]
