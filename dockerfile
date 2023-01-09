



FROM cypress/browsers:latest
RUN  mkdir /app5
WORKDIR /app5
COPY . /app5
RUN npm ci
RUN npm install cy2
ENTRYPOINT ["npx" , "cypress" , "run"]
