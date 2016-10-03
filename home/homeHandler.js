var page = require('./lib/index.html')
var db = require('./lib/database')

module.exports.home = function(event, context) {

        if (event.headers.Authorization == undefined && event.query.user == undefined) {

            context.fail(("https://s3.amazonaws.com/serverless-delivery-framework/");
            }
            else {
                context.succeed(db.getUserVersion("1234"));
            }

        };
