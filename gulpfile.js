'use strict';


var gulp = require('gulp'),
    shell = require('gulp-shell'),
    args = require('yargs').argv;




gulp.task('deploy-webclient', function() {
    return shell.task([
        'aws s3 sync ./build/ s3://serverless-delivery-framework/' + args.version + ' --region us-east-1'
    ])
})











/
