FROM node:19-alpine3.15 
WORKDIR /VOETBAL-FRONTEND 
ENV PATH="./node_modules/.bin:$PATH" 
COPY package.json ./ 
COPY package-lock.json ./ 
RUN npm install --silent 
RUN npm install react-scripts@3.4.1 -g --silent 
COPY . . 
CMD [ "npm", "start" ] 