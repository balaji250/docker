



#Base image taken from:https://github.com/cypress-io/cypress-docker-image
FROM cypress/browsers:node14.17.0-chrome91-ff89
#Create the folder where our project will be stored
USER root
RUN mkdir /my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project
RUN sudo yum update
RUN apt-get install -y libgtk2.0-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]    
