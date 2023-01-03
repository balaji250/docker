FROM cypress/base:16.18.1
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx","cypress","run"]
CMD [""]
