var lr = require('tiny-lr'), // Минивебсервер для livereload
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    del = require('del'),
    connect = require('gulp-connect'),
    connect2 = require('connect'), // Webserver
    serveStatic = require('serve-static'),
    server = lr();

var paths = './src/*.js';

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('connect', function() {
    connect.server({
        root: ['examples'],
        port: 9000,
        livereload: true
    });
    console.log('Server listening on http://localhost:9000');
});

gulp.task('scripts', function() {
    gulp.src(paths)
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
        .pipe(uglify())
        .pipe(concat('jquery.autosave.min.js'))
        .pipe(gulp.dest('./dist/'))
        //.pipe(livereload(server));
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(paths, ['scripts']);

    /*connect()
        .use(require('connect-livereload')())
        .use(serveStatic('./examples'))
        .listen('9000');

    console.log('Server listening on http://localhost:9000');*/
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['connect', 'watch', 'scripts']);