FROM cypress/browsers:latest
RUN  mkdir /app
WORKDIR /app
COPY . /app
ENV EXECUTION_DRIVER="../execution/in-memory" \
    SCREENSHOTS_DRIVER="../screenshots/dummy.driver" \
    PORT="1234"
RUN npm ci \
    npm init -y \
    npm install cypress \ 
    npx cypress -v \
    npx cypress open 
RUN npx cypress open
RUN npx cypress run
