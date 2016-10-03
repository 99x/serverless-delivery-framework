var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var jsend = require('jsend');
var dbTable="user-version";

module.exports = {
    getUserVersion: function(id) {
        var version = 'v2';
        var params = {
            "TableName": "user-version",
            "Key": {
                "id": id
            }
        };

        docClient.get(params, function(err, data) {
            version = JSON.stringify(data);
        });
        return version;
    }
}
