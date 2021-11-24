FROM node:14.18.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm i knex -g

COPY . .

EXPOSE 3333
EXPOSE 5432

CMD [  "node", "index.js", "knex", "migrate:latest"  ]