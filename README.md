# Serverless Delivery Framework

[![Join the chat at https://gitter.im/99xt/serverless-delivery-framework](https://badges.gitter.im/99xt/serverless-delivery-framework.svg)](https://gitter.im/99xt/serverless-delivery-framework?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## [*Introduction*](https://99xt.github.io/serverless-delivery-framework/#introduction)
Serverless delivery framework was developed using aws technologies with serverless framework for deliver software versions and Switch users for different software versions. [read more](https://99xt.github.io/serverless-delivery-framework)

## Architechture
### [Application Architechture](https://99xt.github.io/serverless-delivery-framework/#application-architechture)
<img src="https://github.com/niroshannrsh/serverless-delivery-framework/blob/master/docs/img/Relese-pipeline-1.jpg?raw=true" />

[READ MORE](https://99xt.github.io/serverless-delivery-framework/#application-architechture) Abount application architecture

### Directory structure:
```
├── api
|── config
|   |──s3
|── delivery
|── gulp
|──home
|  |──lib
|  |  |──users
|  |──database
|  |──offline
|  |──resources
|  |──homeHandler.js
|  |──index.html
|  |──package.json
|──build
|──config.json
|──gulpfile.js
|──serverless.yml
|──package.json

```


## [*Getting Started*](https://99xt.github.io/serverless-delivery-framework/#getting-started)
### 1. Clone and Install Depandancies
Clone or download source from github

`git clone https://github.com/99xt/serverless-delivery-framework.git`

Install all npm dependancies

`cd serverless-delivery-framework && npm install`
`gulp dependancy-install`

### 2. Create Application Client

You can use web folder to store your client application. This folder can be contain client app related file such as javascript, css etc. You can structure this folder according to your requrement. This folder is use only when you develop your client application in your local machine.

This applicatiion contain contain simple index.html page if you needed you can replace it by your source code.

`REPLACE web FOLDER BY CLIENT-APP`

## [*Run Application*](https://99xt.github.io/serverless-delivery-framework/#run-application)

### 1. Running the Delivery Framework Dashboard

`gulp serve-dashboard`

### 2. Running the Application Client

`gulp serve-client`

### 3. Running the Application API Gateways

`gulp serve-api`


## <a name="contributing"></a>Contributing
We love our contributors! Please read our [README file](README.md) to learn how you can start project for development and use [gitter chat](https://gitter.im/99xt/interns-portal) .


