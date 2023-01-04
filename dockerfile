FROM agoldis/sorry-cypress-dashboard:latest
USER root
RUN apt-get update
RUN apt-get install -y npm
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npm ci
RUN npx cypress run
