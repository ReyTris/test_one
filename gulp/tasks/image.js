module.exports = () => {
    // настройка pug
$.gulp.task('image', function() {
    return $.gulp.src('src/static/images/**/*.*') // откуда будем брать PUG файлы
        .pipe($.gulp.dest('build/static/images/')) // куда файлы будут компилится
        .on('end',$.browserSync.reload) // после обновления стилей обновитс страница
})
}