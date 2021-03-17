# set node base image
FROM node:14.16.0

WORKDIR /app
COPY package.json /app/package.json

# install required packages into container
RUN npm install
RUN npm i -g @angular/cli@10.1.0

COPY . app
CMD ng serve --host 0.0.0.0
