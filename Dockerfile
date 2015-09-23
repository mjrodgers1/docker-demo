FROM mjrodgers1/nodejs:v1036
MAINTAINER Mark Rodgers <mark.rodgers@irishlife.ie>

RUN wget https://git....

# something should be able to attach to this port
EXPOSE 8888

CMD["node/bin/node", "service.js"]