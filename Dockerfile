FROM node:8

ENV APPDIR=/myapp
RUN mkdir $APPDIR
WORKDIR $APPDIR

RUN npm install -g yarn

COPY package.json yarn.lock $APPDIR/

RUN yarn install

COPY . $APPDIR/

EXPOSE 3001

RUN yarn build
CMD yarn start
