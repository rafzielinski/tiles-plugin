const { src, dest, parallel, watch, series } = require('gulp');
const babel = require('gulp-babel');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css() {
  return src('src/scss/main.scss')
    .pipe(scss())
    .pipe(postcss([ autoprefixer({
      grid: true,
      browsers: ['>1%']
    }) ]))
    // .pipe(minifyCSS())
    .pipe(dest('public/css'))
}

function js() {
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.min.js'))
    .pipe(dest('public/js', { sourcemaps: true }))
}

function watcher() {
  watch('src/scss/*.scss', series(css))
  watch('src/js/*.js', series(js))
}

exports.js = js;
exports.css = css;
exports.watcher = watcher;
exports.default = parallel(css, js);