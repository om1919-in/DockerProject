FROM node:alpine
WORKDIR /app
COPY main/package*.json ./
RUN npm install
COPY main/ .
EXPOSE 80
CMD ["node", "app.js"]