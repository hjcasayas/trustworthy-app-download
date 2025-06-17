FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm
RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y sqlite3 && \
    npm i -g npm@latest && \
    npm i -g pnpm@latest