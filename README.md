## Description

A backend proxy to use the IEX Cloud [API](https://iexcloud.io/docs/api/). (:warning: still in progress)

It is built off [this](https://github.com/zishe/iex-cloud) TypeScript client.

All data is provided by [IEX Cloud](https://iexcloud.io/).


## Setup
Before launching the app, you must do a few things:

- You will need API credentials. You can sign up [here](https://iexcloud.io/cloud-login#/register/) to get your API keys. 
- You need to create a .env file to store them in. There is an example of this file called `.env.example` in this repository.
- Finally add the API key in the .env file you created as it is below.

`.env`
```
IEX_API_TOKEN=pk_XXXX
IEX_API_SECRET_TOKEN=sk_XXXX
IEX_API_SECRET_VERSION=v1
IEX_API_ENV=cloud
```


## Installation
  ##### Make sure you have yarn or npm already installed.

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## API documentation

Once the stack is up, you can checkout the endpoint documentation here:
```
http://localhost:3000/api/
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Thanks
  I want to say a big thanks to everyone who contributed in the tools used in this project.
- [IEX Cloud](https://iexcloud.io/) - Nice/clean API to access financial data
- [TypeScript Client](https://github.com/zishe/iex-cloud) - A TypeScript client for IEX Cloud API
- [Nest](https://github.com/nestjs/nest) - TypeScript backend framework
