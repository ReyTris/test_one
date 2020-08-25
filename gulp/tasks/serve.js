module.exports = () => {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: {
                baseDir: "./build"
            }
        });
    });
}