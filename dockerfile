



FROM cypress/browsers:latest
RUN  mkdir /app6
WORKDIR /app6
COPY . /app6
RUN npm ci
RUN npm install cy2
ENTRYPOINT ["npx" , "cypress" , "run"]
