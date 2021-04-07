FROM node:lts

WORKDIR /usr/app/web
COPY package*.json ./
RUN npm i --silent
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]