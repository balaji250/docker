FROM agoldis/sorry-cypress-director:latest
USER root
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npx cypress open
RUN npm ci
RUN npx cypress run

