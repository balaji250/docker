



FROM cypress/browsers:chrome65-ff57

# set working directory
WORKDIR /app

# install cypres

# copy cypress files and folders
COPY cypress cypress
COPY cypress.json cypress.json

# confirm the cypress install
RUN ./node_modules/.bin/cypress verify
COPY docker-compose.yml docker-compose.yml
ENTRYPOINT [" docker-compose.yml"]
