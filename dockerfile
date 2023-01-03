FROM cypress/browsers:node18.12.0-chrome107
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx","cypress","run"]
CMD [""]
