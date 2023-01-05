
FROM cypress/browsers:latest
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm install cy2
RUN npx cy2 run

