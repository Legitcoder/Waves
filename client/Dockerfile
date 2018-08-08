FROM node:latest

WORKDIR /usr/src/client

COPY . .

RUN npm install -g parcel-bundler
RUN npm install
RUN npm rebuild node-sass

EXPOSE 1234 

CMD ["parcel", "index.html"]