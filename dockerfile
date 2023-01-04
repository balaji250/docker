FROM agoldis/sorry-cypress-dashboard:latest
USER root
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN apt-get install -y npm
RUN npm ci
RUN npx cypress run
