FROM cypress/browsers:node13.6.0-chrome80-ff72
RUN  mkdir /app
WORKDIR /app
COPY . /app
RUN npm init
RUN npm install cypress --save-dev
