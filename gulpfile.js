'use strict';


var gulp = require('gulp'),
    shell = require('gulp-shell'),
    args = require('yargs').argv,
    webserver = require('gulp-server-livereload');

gulp.task('deploy-webclient', function() {
    return shell.task([
        'aws s3 sync ./build/ s3://serverless-delivery-framework/' + args.version + ' --region us-east-1'
    ])
});

gulp.task('server', function() {
    gulp.src('./delivery')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8080,
            defaultFile: 'index.html'
        }));
});
