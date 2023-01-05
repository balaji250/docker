FROM agoldis/sorry-cypress-api:latest
USER root
RUN install xvfb
RUN  mkdir /app1
WORKDIR /app1
COPY . /app1
ENV EXECUTION_DRIVER="../execution/in-memory" \
    SCREENSHOTS_DRIVER="../screenshots/dummy.driver" \
    PORT="1234"
RUN npm ci 
RUN npm init -y 
RUN npm install cypress 
RUN npx cypress -v 
RUN npx cypress run
