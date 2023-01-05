FROM cypress/browsers:latest
USER root
RUN apt-get upgrade -y
RUN apt install -y chromium-browser
RUN  mkdir /app
WORKDIR /app
COPY . /app
ENV EXECUTION_DRIVER="../execution/in-memory" \
    SCREENSHOTS_DRIVER="../screenshots/dummy.driver" \
    PORT="1234"
RUN npm ci 
RUN npm init -y 
RUN npm install cypress 
RUN npx cypress -v 
RUN npx cypress open 
RUN npx cypress open
RUN npx cypress run
