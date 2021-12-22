FROM node:alpine
WORKDIR /front
COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . ./

CMD ["npm", "run", "start"]