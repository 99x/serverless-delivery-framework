
module.exports.home = function(event, context) {
    var html = '<html><head><title>HTML from API Gateway/Lambda</title></head>' + 
        '<body><h1>HTML from API Gateway/Lambda</h1></body></html>';
    
    context.succeed(html);
};

