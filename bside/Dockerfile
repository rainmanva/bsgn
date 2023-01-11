FROM node:lts-alpine
ENV NODE_ENV=production
ENV API_KEY="at_gAE59bgEeFKZcPejmnXvK3Es8zztK"
ENV MAC="38:f9:d3:05:51:e0"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "initial.js"]
