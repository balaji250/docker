FROM cypress/browsers:node13.6.0-chrome80-ff72
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npm install -g "cypress@9.2.0
RUN npm install --save-dev mocha cypress-multi-reporters mochawesome
RUN npx cypress run
