var gulp = require('gulp'),
    concat = require('gulp-concat');

const del = require('del');
gulp.task('clean', async function() {
    const deletedPaths = await del(['dist/**', '!dist']);
    console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
});

gulp.task('build_html', function() {
  return gulp.src('./src/*.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build_img', async function(){

     gulp.src('src/img/*.*')
    .pipe(gulp.dest('dist/img'));
});


gulp.task('build_css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build_js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', gulp.series(gulp.parallel('clean', 'build_html', 'build_img', 
                                             'build_css','build_js')), function(){
  // Сейчас 3:33. Доколе и пошто? :-((( Были же такие простые квадратные скобки и вот.
});