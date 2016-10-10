'use strict';
var gulp = require('gulp'),
    shell = require('gulp-shell'),
    args = require('yargs').argv,
    webserver = require('gulp-server-livereload'),
    config = require('./config.json'),
    htmlreplace = require('gulp-html-replace'),
    jeditor = require("gulp-json-editor");

gulp.task('deploy-webclient', function() {
    return shell.task([
        'aws s3 sync ./build/ s3://' + config.S3Bucket + '/' + args.version + ' --region ' + config.S3Region + ''
    ])
});

gulp.task('deploy-authApp', function() {
    return shell.task([
        'aws s3 sync ./build/ s3://' + config.S3Bucket + '/authApp --region ' + config.S3Region + ''
    ])
});

gulp.task('writejs', function() {

    gulp.src("./config.json")
        .pipe(jeditor({
            'S3Bucket': args.name
        }))
        .pipe(gulp.dest("./"));

})

gulp.task('default', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
        'css': 'styles.min.css',
        'js': "<%= s3bucket +'/scripts/vendor-ca775fee83.js' %>"
    }))
    .pipe(gulp.dest('web/'));
});

gulp.task('show', function() {
    return shell.task(['echo hsdhs'])
})

/*Create new s3 bucket
 */
gulp.task('create-S3Bucket', ['new-s3Bucket ', 'writejs']);

gulp.task('new-s3Bucket ', function() {
    return shell.task(['aws s3 mb s3://' + args.name])
});

/* Config S3 bucket for static web hosting
 */

gulp.task('config-S3Bucket', ['s3-hostPolicy', 's3-websiteConfig']);

gulp.task('s3-hostPolicy', function() {
    return shell.task(['aws s3api put-bucket-policy --bucket ' + args.name + ' --policy file://s3bucket_website_hosting_policy.json'])
});

gulp.task('s3-websiteConfig', function() {
    return shell.task(['aws s3api put-bucket-website --bucket ' + args.name + ' --website-configuration file://s3bucket_website_configuration.json'])
});
/*Serve web framework dashbord
 */

gulp.task('serve-client', function() {
    gulp.src('./delivery')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8080,
            defaultFile: 'index.html'
        }));
});
/* install all dependancy
 */

gulp.task('dependancy-install', ['main-dependency', 'web-dependency', 'home-dependency', 'delivery-dependency']);

gulp.task('main-dependency', function() {
    return shell.task([
        'npm install'
    ])
});
gulp.task('web-dependency', function() {
    return shell.task([
        'cd web', 'npm install', 'cd ..'
    ])
});
gulp.task('home-dependency', function() {
    return shell.task([
        'cd home', 'npm install', 'cd ..'
    ])
});
gulp.task('delivery-dependency', function() {
    return shell.task([
        'cd delivery', 'npm install', 'cd ..'
    ])
});
