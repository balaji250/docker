



FROM cypress/browsers:node14.7.0-chrome84
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npm ci
npm install cy2
RUN npx cypress run
EXPOSE 3000
ENTRYPOINT ["npx" , "cypress" , "run"]
