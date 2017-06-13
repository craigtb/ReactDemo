var gulp = require('gulp');

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("babel", function(){
    return gulp.src("app/*.jsx").
    pipe(babel({
        plugins: ['transform-react-jsx']
    })).
    pipe(gulp.dest("src/main/resources/static/js/"));
});

var webpack = require('webpack-stream');
gulp.task("webpack", function() {
    return gulp.src(['src/main/resources/static/js/App.js',
                     'src/main/resources/static/js/Header.js'])
        .pipe(webpack({output: {
            path: '/Users/CTB6158/workspace_personal/ReactDemo/src/main/resources/static/js',
            filename: 'bundle.js'
        }}))
        .pipe(gulp.dest('src/main/resources/static/js/'));
});


gulp.task('copy', function () {
    gulp.src(['./node_modules/react/dist/react.min.js',
        './node_modules/react-dom/dist/react-dom.min.js'])
        .pipe(gulp.dest('./src/main/resources/static/vendor/js'));

});

gulp.task('default', ['copy','babel', 'webpack']);