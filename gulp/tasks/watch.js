module.exports = () => {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug')) //следит за изменениями PUG файлов
        $.gulp.watch('src/static/sass/**/*.scss',$.gulp.series('sass')) //следит за изменениями SASS файлов
        $.gulp.watch('src/static/js/**/*.js',$.gulp.series('scripts'))
        $.gulp.watch('src/static/images/**/*.svg',$.gulp.series('image'))
    })
}