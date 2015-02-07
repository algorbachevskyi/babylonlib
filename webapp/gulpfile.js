var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('scripts/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('scripts/css'));
});

gulp.task('default', function () {
    gulp.watch('scripts/scss/**', function() {
        gulp.run('sass');
    });
});
