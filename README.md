# Express Health Check Demo

## Commands

- build the application

```bash
yarn build

```

- build the image

```bash
docker build --tag jason/express-health-check-demo .

```

- run the container

```bash
docker run -d -p 8080:8080 -p 8090:8090 --name=express-health-check-demo jason/express-health-check-demo

```

- stop container

```bash
docker stop express-health-check-demo

```

- remove container and image

```bash
docker rm express-health-check-demo
docker image rm jason/express-health-check-demo:latest

```
