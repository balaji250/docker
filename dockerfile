FROM cypress/browsers:latest
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npx cypress open
RUN npm ci
RUN npx cypress run

