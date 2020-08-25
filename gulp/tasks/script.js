module.exports = () => {
    // Подключаем сюда все дополнительные плагины
    $.gulp.task('scripts:lib', function() {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 
                'node_modules/slick-carousel/slick/slick.min.js']) 


            
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.browserSync.reload({
                stream:true  
            }))  //отвечает за обработку из библиотек и конконтенацию в один файл
    })

    $.gulp.task('scripts', function() {
        return $.gulp.src('src/static/js/**/*.js')
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.browserSync.reload({
                stream:true  
            }))  
    })
}