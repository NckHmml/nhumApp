FROM node:8.5-alpine

WORKDIR /usr/src/app
COPY . .

# Dependencies
#  - bash: the alpine build is nice and small, but doesn't ship with bash
RUN apk update \
    && apk add bash \
    && yarn global add \
        gulp \
        create-react-native-app

# Install packages, but clean the cache (Saves us ~600mb)
RUN yarn install && yarn cache clean

# Default is "node"
CMD yarn start