FROM node:14-buster-slim
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet

# next stuff just for aws

COPY . .
EXPOSE 5000
CMD ["node", "busController.js"]