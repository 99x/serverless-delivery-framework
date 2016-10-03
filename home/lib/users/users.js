var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var jsend = require('jsend');
var table = "user-version";

module.exports = {
    getUsers: function(event, context) {
        var params = {
            "TableName": table,
        };
        docClient.scan(params, function(err, data) {
            context.succeed(jsend.fromArguments(err, data));
        });
    },
    getUser: function(event, context) {
        var params = {
            "TableName": table,
            "Key": {
                "id": event.body.id,
            }
        };
        docClient.get(params, function(err, data) {
            context.succeed(jsend.fromArguments(err, data));
        });
    },
    createUser: function(event, context) {
        var datetime = new Date().getTime().toString();
        var item = event.body;
        item.lastUpdated = datetime;
        var params = {
            TableName: table,
            Item: item
        };
        docClient.put(params, function(err, data) {
            context.succeed(jsend.fromArguments(err, data));
        });
    }
};
