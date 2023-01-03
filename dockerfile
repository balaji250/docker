 FROM cypress/included:12.2.0
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install
RUN npm run cy
RUN npx cypress run
