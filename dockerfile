



FROM cypress/browsers:chrome65-ff57

# set working directory
WORKDIR /app

# install cypres

# copy cypress files and folders
COPY cypress cypress
COPY cypress.config.js cypress.config.js
# confirm the cypress install
COPY docker-compose.yml docker-compose.yml
ENTRYPOINT [" docker-compose.yml up"]
