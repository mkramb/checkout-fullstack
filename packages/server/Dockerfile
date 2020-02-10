FROM node:12.10.0-stretch-slim

ENV NPM_CONFIG_LOGLEVEL=error

ADD . /usr/feedback
WORKDIR /usr/feedback

EXPOSE 3000
ENTRYPOINT ["sh", "-c"]

CMD ["yarn install && yarn bootstrap"]
CMD ["cd packages/server && yarn build"]

CMD ["yarn install --prod"]
CMD ["cd packages/server && yarn start"]
