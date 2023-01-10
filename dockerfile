



FROM cypress/browsers:latest
RUN  mkdir /app6
WORKDIR /app6
COPY . /app6
RUN npm ci
RUN npm install cy2
RUN npx cypress open
ENTRYPOINT ["npx" , "cypress" , "run"]
