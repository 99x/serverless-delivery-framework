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

gulp.task('create-S3Bucket', function(){
  return shell.task(['aws s3 mb s3://'+args.name])
});


gulp.task('s3-hostPolicy', function(){
  return shell.task(['aws s3api put-bucket-policy --bucket myS3Bucket --policy file://s3bucket_website_hosting_policy.json'])
});

gulp.task('s3-websiteConfig', function(){
  return shell.task(['aws s3api put-bucket-website --bucket myS3Bucket --website-configuration file://s3bucket_website_configuration.json'])
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

gulp.task('main-dependency',function(){
  return shell.task([
    'npm install'
  ])
});
gulp.task('web-dependency',function(){
  return shell.task([
    'cd web','npm install','cd ..'
  ])
});
gulp.task('home-dependency',function(){
  return shell.task([
    'cd home','npm install','cd ..'
  ])
});
gulp.task('delivery-dependency',function(){
  return shell.task([
    'cd delivery','npm install','cd ..'
  ])
});
