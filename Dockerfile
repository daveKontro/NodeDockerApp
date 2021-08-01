FROM node:12-alpine
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY . .
RUN npm install
RUN npm audit fix
EXPOSE 3000
CMD [ "node", "server.js" ]