



FROM cypress/browsers:latest
RUN  mkdir /app4
WORKDIR /app4
COPY . /app4
RUN npm ci
RUN npm install cy2
ENTRYPOINT ["npx" , "cypress" , "run"]
