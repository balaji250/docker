FROM cypress/included:12.3.0
USER root
RUN apt-get update
RUN apt-get install -y libgtk2.0-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN  mkdir /app1
WORKDIR /app1
COPY . /app1
RUN npx cypress open
RUN npm ci
RUN npx cypress run

