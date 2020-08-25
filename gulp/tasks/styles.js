module.exports = () => {
    $.gulp.task('sass', function() {
        return $.gulp.src('src/static/sass/**/*.scss') // откуда будем брать sass/scss файлы
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                overrideBrowserslist:['last 11 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.gp.csso()) //оптимизирует CSS код
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/')) // куда файлы будут компилится
            .pipe($.browserSync.reload({
                stream:true  
            }))  // чтобы страница после обновления осталась на том же месте
    })
}