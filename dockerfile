FROM node:19-alpine3.15
WORKDIR /VOETBAL-FRONTEND
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD [ "npm", "start" ]

