# install the base image for the application
FROM node:20-alpine as build

# set the app working directory
WORKDIR /app

# copy the app code
COPY . .

# install the dependencies and build the app
RUN yarn install && yarn run build

FROM nginx:1.25.1-alpine
ENV HTMLFOLDER=/usr/share/nginx/html/index.html
WORKDIR /usr/share/nginx/html

# Copy the Nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# copy the app code
COPY --from=build /app/public/ .

# copy the setup the start script
RUN chmod -R +x .
COPY deployment/run.sh /bin/run.sh
RUN chmod +x /bin/run.sh


# start the nginx server
CMD [ "run.sh" ]