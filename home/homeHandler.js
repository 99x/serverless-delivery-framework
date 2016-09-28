var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var jsend = require('jsend');


module.exports.home = function(event, context) {

    if (event.headers.Authorization == undefined && event.query.user==undefined) {
        context.fail("https://s3.amazonaws.com/serverless-delivery-framework/index.html");
    }
    else {

        var params = {
            "TableName": "user-version",
            "Key": {
                "id": event.query.user
            }
        };

        docClient.get(params, function(err, data) {
            if (data.Item.version == "v1") {
                var html = '<html><body> <h1>Test release pipeline</h1><script src="https://s3.amazonaws.com/serverless-delivery-framework/v2/add.js"><h2>' + JSON.stringify(data) + '</h2>' + '</script></body></html>';
                context.succeed(html);
            } else if (data.Item.version == "v2") {
                var html2 = '<!DOCTYPE html><html lang="en" ng-app="BlurAdmin"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>99X Intern</title><link href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900&subset=latin,greek,greek-ext,vietnamese,cyrillic-ext,latin-ext,cyrillic" rel="stylesheet" type="text/css"><link rel="icon" type="image/png" sizes="16x16" href="https://s3.amazonaws.com/serverless-delivery-framework/v2/assets/img/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="https://s3.amazonaws.com/serverless-delivery-framework/v2/assets/img/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="https://s3.amazonaws.com/serverless-delivery-framework/v2/assets/img/favicon-96x96.png"><link rel="stylesheet" href="https://s3.amazonaws.com/serverless-delivery-framework/v2/styles/vendor-c4704849e8.css"><link rel="stylesheet" href="https://s3.amazonaws.com/serverless-delivery-framework/v2/styles/app-dc9720f664.css"><link rel="stylesheet" href="https://s3.amazonaws.com/serverless-delivery-framework/v2/styles/auth-dc9720f664.css"></head><body><div ui-view=""></div><script src="https://s3.amazonaws.com/serverless-delivery-framework/v2/scripts/vendor-ca775fee83.js"></script><script src="https://s3.amazonaws.com/serverless-delivery-framework/v2/scripts/app-d38690c713.js"></script><script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.48.min.js"></script><script type="text/javascript">  </script></body></html>';
                context.succeed(html2);
            } else {
                context.succeed("html2");
            }

        });

    }

    function generateHTML() {

    };




};
