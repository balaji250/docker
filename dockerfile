FROM cypress/browsers:latest
RUN  mkdir /app
WORKDIR /app
COPY . /app
npm install cy2
npx cypress open
RUN npm ci
RUN npx cypress run
