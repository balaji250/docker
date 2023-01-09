



FROM cypress/browsers:latest
RUN  mkdir /app3
WORKDIR /app3
COPY . /app3
RUN npm ci
RUN npm install cy2
ENTRYPOINT ["npx" , "cypress" , "run"]
