FROM node:16.15.0-alpine
# dockerコンテナ本体の、/usr/src/appを作業場に。
# つまり、/usr/src/app/<reactで作成したapp名>となる
WORKDIR /usr/src/app