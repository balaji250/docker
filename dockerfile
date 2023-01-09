



FROM cypress/browsers:latest
RUN  mkdir /app2
WORKDIR /app2
COPY . /app2
RUN npm ci
RUN npm install cy2
ENTRYPOINT ["npx" , "cypress" , "run"]
