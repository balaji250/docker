FROM agoldis/sorry-cypress-director:latest
USER root
RUN  mkdir /app1
WORKDIR /app1
COPY . /app1
RUN npx cypress open
RUN npm ci
RUN npx cypress run

