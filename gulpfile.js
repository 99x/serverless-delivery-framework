'use strict';


var gulp = require('gulp'),
    shell = require('gulp-shell'),
    _ = require('underscore'),
    fs = require('fs'),
    args = require('yargs').argv;

gulp.task('example', function() {
    return gulp.src('*.js', {
            read: false
        })
        .pipe(shell([
            'echo <%= f(file.path) %>',
            'dir -l <%= file.path %>'
        ], {
            templateData: {
                f: function(s) {
                    return s.replace(/$/, '.bak')
                }
            }
        }))
})




gulp.task('deploy-webclient', function() {
    fs.readFile('index.html', 'utf8', function(err, template) {
        if (err) {
            return console.log(err);
        }
        console.log(_.template(template)({
            s3bucket: '###############'
        }));
    });
    return true;
    /*  return shell.task([
          'aws s3 sync ./build/ s3://serverless-delivery-framework/' + args.version + ' --region us-east-1'
      ])*/
})





gulp.task('deployS3', function() {

});






/*

var exec = require('gulp-exec')

var exec = require('child_process').exec

gulp.task('task', function(cb) {
    exec('ping localhost', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

*/
