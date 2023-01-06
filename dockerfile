



FROM cypress/browsers:node14.17.0-chrome91-ff89 as build
ARG BUILD_ID
RUN echo $BUILD_ID
LABEL build_id=$BUILD_ID
RUN mkdir /repo
WORKDIR /repo
COPY ./package.json /repo
COPY ./cypress.config.js /repo
COPY ./cypress /repo
RUN apt-get update
RUN apt-get install -y libgtk2.0-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

FROM agoldis/sorry-cypress-director:latest
LABEL build_id=$BUILD_ID
USER root
#Create the folder where our project will be stored
RUN mkdir /my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project
#Let's copy the essential files that we MUST use to run our scripts.
COPY --from=build /repo /my-cypress-project
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last 
CMD [""]    

