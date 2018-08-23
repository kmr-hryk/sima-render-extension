FROM alpine:latest

RUN apk update && apk add --no-cache npm git nginx

RUN mkdir -p /opt/sre
WORKDIR /opt/sre

ADD . /opt/sre

RUN npm i -g npm && \
  npm i && \
  npm run release && \
  npm run apply && \
  sed "s/return 404;/root \/opt\/sre\/gsimaps;/" -i /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "pid /tmp/nginx.pid;daemon off;"]
