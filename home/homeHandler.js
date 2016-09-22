
module.exports.home = function(event, context) {
    var html = '<html><body> <h1>Test release pipeline</h1><script src="https://s3.amazonaws.com/serverless-delivery-framework/v1/add.js"></script></body></html>';

    context.succeed(html);
};
