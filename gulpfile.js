const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // sass -> css
const minifyCSS = require('gulp-minify-css') // 压缩css

gulp.task('sass', (cb) => {
  gulp.src('components/css/**/*.scss').pipe(sass()).pipe(minifyCSS()).pipe(gulp.dest('dist/css'))
  cb()
})
