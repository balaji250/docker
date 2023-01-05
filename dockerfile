
FROM agoldis/sorry-cypress-director
USER root
#Create the folder where our project will be stored
RUN mkdir /my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
ENV DISPLAY :99

ADD run.sh /run.sh
RUN chmod a+x /run.sh

CMD /run.sh
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last 

