var gulp = require('gulp');
var cssmin=require("gulp-cssmin")
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const tinypng_nokey = require('gulp-tinypng-nokey')
gulp.task("dance",()=>{
	console.log("任务正在执行")
})
//复制
gulp.task("first",()=>{
	gulp.src("src/*/**").pipe(gulp.dest("dist"))
})
//压缩css
gulp.task('cssmin', function () {
  gulp.src('src/css/*.css')
     .pipe(cssmin())
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('dist'));
});
//降级JS
gulp.task('default', () =>{
	gulp.src('src/js/ComfirmOrder.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
	} 	
);
//降级压缩JS
gulp.task('compress', function () {
    gulp.src('src/js/ComfirmOrder.js')
    	.pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
//压缩图片
gulp.task('tp', function() {
    gulp.src('src/img/*.{png,jpg,jpeg,gif,ico}')
        .pipe(tinypng_nokey ())
        .pipe(gulp.dest('dist/img'));
})
//完美版
gulp.task("main",()=>{
	gulp.src('src/font/**')
	  .pipe(gulp.dest('dist/font'))
	gulp.src('src/html/**')
	  .pipe(gulp.dest('dist/html'))
	//压缩CSS
	gulp.src('src/css/*.css')
     .pipe(cssmin())
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('dist/css'));
    //降级压缩JS
    gulp.src('src/js/**')
    	.pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'));
    //压缩图片
    gulp.src('src/img/*.{png,jpg,jpeg,gif,ico}')
        .pipe(tinypng_nokey ())
        .pipe(gulp.dest('dist/img'));
})












