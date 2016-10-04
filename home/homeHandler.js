var page = require('./lib/index.html');
var db = require('./lib/database');

module.exports.home = function(event, context) {
    var s3Bucket = "https://s3.amazonaws.com/serverless-delivery-framework/",
        version = "v2";
          page.renderHTML(s3Bucket, version, context);
/*
    if (event.headers.Authorization == undefined && event.query.user == undefined) {

        context.fail(("https://s3.amazonaws.com/serverless-delivery-framework/index.html"));

    } else {

    }
    */


}
