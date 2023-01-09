



FROM cypress/browsers:node14.7.0-chrome84

RUN useradd -ms /bin/bash cypress
RUN install -d -m 0777 -o cypress -g cypress /app
RUN chown cypress:cypress /app
WORKDIR /app
RUN useradd -ms /bin/bash admin
RUN chown -R root:root /app
RUN chmod 755 /app
USER root
ENV CYPRESS_CACHE_FOLDER="/app/.cypress"
ENV CI=true

# USER cypress

# install dependencies
COPY package.json ./
RUN npm install
# confirm that Cypress was installed correctly
RUN npx cypress verify

# copy files required by yarn tasks
COPY cypress.json ./
# copy reporter config, used to output JUnit XML
COPY cypress.config.js ./
# copy tests
COPY cypress cypress
EXPOSE 3000
ENTRYPOINT ["npx" , "cypress" , "run"]
