FROM agoldis/sorry-cypress-dashboard:latest
USER root
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npm install cy2 cypress
