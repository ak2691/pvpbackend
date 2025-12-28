FROM node:25-alpine

COPY package.json /backend/
COPY src /backend/

WORKDIR /backend
RUN npm install

CMD ["node", "app.js"]
