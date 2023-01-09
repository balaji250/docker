



FROM cypress/browsers:latest
RUN  mkdir /app1
WORKDIR /app1
COPY . /app1
RUN npm ci
RUN npm install cy2
EXPOSE 3000
ENTRYPOINT ["npx" , "cypress" , "run"]
