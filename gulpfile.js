const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagens'))
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
    
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJS));
    gulp.watch('./source/imagens/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}