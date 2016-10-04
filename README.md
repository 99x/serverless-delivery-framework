#Serverless Delivery Framework

[![Join the chat at https://gitter.im/99xt/serverless-delivery-framework](https://badges.gitter.im/99xt/serverless-delivery-framework.svg)](https://gitter.im/99xt/serverless-delivery-framework?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Introduction
Serverless delivery framework was developed using aws technologies with serverless framework for deliver software versions.

## Architechture

###Directory structure:
```
├── api
|── web
|──delivery
|  |──app
|  |──images
|  |──javascripts
|  |──stylesheets
|──home
|  |──lib
|  |  |──resources
|──build
|──gulpfile.js
|──serverless.yml

```
##Used Technologies
[*Serveless Framework*](https://serverless.com/)

[*AWS Lambda*] (https://aws.amazon.com/documentation/lambda/)

[*AWS API Gateway*](https://aws.amazon.com/api-gateway/)

## Setup Development Environment in Local Machine
### clone and install depandancy
| **Step** | **Command** |**Description**|
|---|-------|------|
|  1.  | `git clone https://github.com/99xt/serverless-delivery-framework.git` | clone project |
|  2.  | `cd serverless-delivery-framework && npm install` | npm dependancy install 
|  3.  | `gulp dependancy-install` | install all other depandancies of api and client 

### Create s3 bucket and enable for static web hosting
| **Step** | **Command** |**Description**|
|---|-------|------|
|  1.  | `gulp create-S3Bucket --name {YOUR-S3-Bucket-Name}` | create s3 bucket|
|  2.  | `gulp config-S3Bucket --name {YOUR-S3-Bucket-Name}` | configure s3 bucket for static web hosting|

### Serve Delivery Framework web client
| **Step** | **Command** |**Description**|
|---|-------|------|
|  1.  | `gulp serve-client` | serve web client|




## <a name="contributing"></a>Contributing
We love our contributors! Please read our [README file](README.md) to learn how you can start project for development and use [gitter chat] (https://gitter.im/99xt/interns-portal) .


