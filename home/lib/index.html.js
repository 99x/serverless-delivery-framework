var _ = require('lodash');
var fs = require('fs');

module.exports = {
  renderHTML: function (s3Bucket,version,context){
    fs.readFile('index.html', 'utf8', function(err, template) {
        if (err) {
            return console.log(err);
        }
        context.succeed(_.template(template)({
            s3bucket: s3Bucket+version
        }));
    });
  }
}
