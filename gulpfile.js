 'use strict'

global.$ = {                                            //глобальная переменная( можно любую), для использования ставить перед названием плагина
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js') // путь где лежат пути к плагинам
    }
};

$.path.tasks.forEach(function (taskPath) {   // перебираем все имеющиеся плагины
    require(taskPath)()
});

//в каком порядке буду запускаться плагины
$.gulp.task('default', $.gulp.series( 
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'image'),
    $.gulp.parallel('watch', 'serve') // parallel для того чтобы запустить watch одновременно с сервером
    ))