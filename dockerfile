



FROM cypress/browsers:node14.17.0-chrome91-ff89
#Create the folder where our project will be stored
RUN mkdir /app
#We make it our workdirectory
WORKDIR /app
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
RUN npm install cy2 cypress
#Executable commands the container will use[Exec Form]
RUN npx cy2 run 
