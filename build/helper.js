var gulp = require('gulp');

var deployS3 = function() {
    gulp.src(['./web/dist']).pipe(exec('aws s3 sync ./web/dist/ s3://coverya-web --region eu-central-1')).pipe(exec.reporter());
};
module.exports.deployS3 = deployS3;


var slsApi = function(callback) {
    var exec = require('child_process').exec,
        ls = exec('cd api ' + commandSeparator + ' sls offline start'),
        init = false;
    ls.stdout.on('data', function(data) {
        !init && (init = true) && callback();
        console.log(data);
    });
    ls.stderr.on('data', function(data) {
        console.log(data);
    });
};
module.exports.slsApi = slsApi;

var dynamodb = function(callback) {
    var exec = require('child_process').exec,
        ls = exec('cd api ' + commandSeparator + ' sls dynamodb start -c'),
        init = false;
    ls.stdout.on('data', function(data) {
        !init && (init = true) && callback();
        console.log(data);
    });
    ls.stderr.on('data', function(data) {
        console.log(data);
    });
};
module.exports.dynamodb = dynamodb;
