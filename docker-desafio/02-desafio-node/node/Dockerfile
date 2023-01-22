FROM node:alpine

WORKDIR /app

COPY package*.json app.js /app/

RUN npm i

EXPOSE 3000

ENTRYPOINT [ "node","/app/app.js" ]