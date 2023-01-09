



FROM cypress/browsers:latest
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm install cy2
RUN npx cypress run
EXPOSE 3000
ENTRYPOINT ["npx" , "cypress" , "run"]
