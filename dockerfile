FROM cypress/browsers:node18.12.0-chrome107
# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install -g npm@9.2.0
ENTRYPOINT ["npx","cypress","run"]
 
