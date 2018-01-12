'use strict';

var gulp = require('gulp'),
	gp = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create(),
	babel = require("gulp-babel");

gulp.task('scripts', () =>
    gulp.src('src/static/js/*.js')
    	.pipe(gp.sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gp.sourcemaps.write('.'))
        .pipe(gulp.dest('build/static/js'))
        .pipe(browserSync.reload({
			stream: true
		}))
);

gulp.task('scriptsLib', () =>
    gulp.src(['src/static/libs/bounce.js/bounce.min.js'])
    	.pipe(gp.concat('libs.min.js'))
    	.pipe(gulp.dest('build/static/js/'))
    	.pipe(browserSync.reload({
			stream: true
		}))
);

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('imgBuild', () =>
    gulp.src('src/static/img/**/*')
        .pipe(gp.imagemin())
        .pipe(gulp.dest('build/static/images/'))
);

gulp.task('imgDev', () =>
    gulp.src('src/static/img/**/*')
        .pipe(gulp.dest('build/static/images/'))
);

gulp.task('pug', function(){
	return gulp.src('src/pug/pages/*.pug')
		.pipe(gp.pug({
			pretty: true
		}))
		.pipe(gulp.dest('build'))
		.on('end', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('src/static/scss/*.scss')
		.pipe(gp.sourcemaps.init())
		.pipe(gp.sass())
		.pipe(gp.autoprefixer({
			browsers: ['last 10 versions'],
            cascade: false
		}))
		.on("error", gp.notify.onError({
			message: "Error: <%= error.message %>",
			title: "Sass error"
		}))
		.pipe(gp.sourcemaps.write())
		.pipe(gulp.dest('build/static/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', function(){
	gulp.watch('src/pug/pages/**/*.pug', gulp.series('pug'));
	gulp.watch('src/static/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('src/static/js/**/*.js', gulp.series('scripts'));
	gulp.watch('src/static/libs/**/*.js', gulp.series('scriptsLib'));
	gulp.watch('src/static/img/**/*', gulp.series('imgDev'));
});

gulp.task('default',
	gulp.series(
		gulp.parallel('pug','sass', 'scripts','imgDev'),
		gulp.parallel('watch','serve')
))

gulp.task('build',
	gulp.series(
		gulp.parallel('pug','sass', 'scripts','imgBuild'),
		gulp.parallel('watch','serve')
))

