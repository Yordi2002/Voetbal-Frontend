


FROM node:13.12.0-alpine
WORKDIR /VOETBAL-FRONTEND
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install react-scripts@3.4.1 -g --silent # add app COPY . ./ # start app 
CMD ["npm", "start"]