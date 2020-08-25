module.exports = () => {
    // настройка pug
$.gulp.task('pug', function() {
    return $.gulp.src('src/pug/*.pug') // откуда будем брать PUG файлы
        .pipe($.gp.pug({
            pretty:true // для красивого html кода
        }))
        .pipe($.gulp.dest('build')) // куда файлы будут компилится
        .on('end',$.browserSync.reload) // после обновления стилей обновитс страница
})
}