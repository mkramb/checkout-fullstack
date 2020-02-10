FROM node:12.10.0-stretch-slim

ENV NPM_CONFIG_LOGLEVEL=error

RUN npm -g update npm
RUN npm install -g http-server@^0.12.1

ADD . /usr/feedback
WORKDIR /usr/feedback

EXPOSE 9000
ENTRYPOINT ["sh", "-c"]

CMD ["yarn install && yarn bootstrap"]
CMD ["cd packages/web && yarn build"]

CMD ["yarn install --prod"]
CMD ["cd packages/web && yarn start"]
