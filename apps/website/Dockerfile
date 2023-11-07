FROM node:20-alpine AS node-pnpm

RUN npm i -g pnpm

FROM node-pnpm AS hrwg-base

ARG ORIGIN
ENV ORIGIN ${ORIGIN}

WORKDIR /app
EXPOSE 4200

RUN mkdir -p var/cache var/logs var/data
COPY ./dist/apps/website .
COPY ./package.json .
COPY ./pnpm-lock.yaml .

RUN pnpm install --production --frozen-lockfile --ignore-scripts

CMD ["node", "server/entry.express.mjs"]
