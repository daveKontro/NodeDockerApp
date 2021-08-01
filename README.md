# NodeDockerApp
- simple node.js app containerized via docker for deployment testing
- use for testing purposes; not recommend for production deployment

## run app directly
- navigate to app root dir
- install app dependencies (1st time only) `npm install`
- start app `npm start`
  - or `npm run dev` if you want to edit app files
- app running on `http://localhost:3000/`
- stop app `ctl-c`

## build image and run container locally
- navigate to app root dir
- build image `docker build -t node-docker-app .`
- see image `docker images`
- start app in container `docker run -p 80:3000 -d <image id>`
- see container `docker ps`
- start shell in container `docker exec -it <container id> /bin/ash`
- app running on `http://localhost/`
  - open `access.log` in container to view http logging
- exit container shell `exit`
- stop container `docker stop <container id>`