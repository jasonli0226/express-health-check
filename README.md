# Express Health Check Demo

Reference: https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana

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
docker run -d -p 8080:8080 -p 8090:8090 \
  --name=express-health-check-demo \
  jason/express-health-check-demo

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

- start prometheus

```bash
docker run --rm -p 9090:9090 \
  -v `pwd`/prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus:v2.20.1

```

- start grafana

```bash
docker run --rm -p 3000:3000 \
  -e GF_AUTH_DISABLE_LOGIN_FORM=true \
  -e GF_AUTH_ANONYMOUS_ENABLED=true \
  -e GF_AUTH_ANONYMOUS_ORG_ROLE=Admin \
  -v `pwd`/datasources.yml:/etc/grafana/provisioning/datasources/datasources.yml \
  grafana/grafana:7.1.5

```
