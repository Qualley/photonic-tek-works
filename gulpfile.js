const gulp = require('gulp');
const minifyJs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
// const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

//scss
function compilescss() {
    return gulp.src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

//js
function bundle() {
    return gulp.src('./js/**/*.js')
    .pipe(sourceMaps.init())
        .pipe(minifyJs())
        // .pipe(concat('bundle.js'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist/js/'))
}

//watch function
function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('./scss/**/*.scss', compilescss).on('change', browserSync.reload);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', bundle).on('change', browserSync.reload);
}

exports.compilescss = compilescss;
exports.bundle = bundle;
exports.watch = watch;