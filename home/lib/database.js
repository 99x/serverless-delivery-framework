var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var jsend = require('jsend');

module.exports= {
  getUserVersion : function(id){
    var params = {
        "TableName": "user-version",
        "Key": {
            "id": id
        }
    };

    docClient.get(params, function(err, data) {
      return data.Item.version;
    });
  }
}
