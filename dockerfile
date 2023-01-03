FROM cypress/browsers:node18.12.0-chrome107
FROM cypress/browsers:node13.6.0-chrome80-ff72
# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install 
RUN npm install 
RUN npx cypress run
 
