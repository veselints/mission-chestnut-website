var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    dom = require('gulp-dom'),
    fs = require('fs'),
    path = require('path');

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('mergecss', function() {
    return gulp
        .src(['./css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(cleanCss({level:{1:{specialComments:0},2:{removeDuplicateRules:true}}}))
        .pipe(gulp.dest('dist'))
});

gulp.task('extractcontent', function () {
    return gulp
        .src('./dist/news/*.html')
        .pipe(dom(function() {
            let article = this.querySelector('#middle');
            console.log(article.innerHTML)
            return article.innerHTML;
        }))
        .pipe(gulp.dest('./dist/news/'))
});

gulp.task('news', function() {
   var folders = getFolders('dist/news');

   var tasks = folders.map(function(folder) {
      return gulp.src(path.join('dist/news', folder, '/index.html'))
        .pipe(gulp.dest('./'))
        .pipe(rename(folder + '.html')) 
        .pipe(gulp.dest('dist/news'));
   });

   return tasks;
});

gulp.task('removestyles', function () {
    return gulp
        .src('dist/news/**/*.html',  { base: "./" })
        .pipe(dom(function() {
            let links = this.querySelectorAll('link');
            let style = this.querySelector('style');
            let i;
            
            if(style) {
                style.parentNode.removeChild(style);
            }

            if(links) {
                for(i = 0; i < links.length; i += 1) {
                    links[i].parentNode.removeChild(links[i]);
                }
            }

            return this;
        }))
        .pipe(gulp.dest('.'))
});

gulp.task('injectstyles', function () {
    return gulp
        .src('dist/news/**/*.html',  { base: "./" })
        .pipe(dom(function() {
            let style = this.createElement('style')
            let head = this.querySelector('head');

            if(head) {
                style.setAttribute('href', '/styles.css');
                head.appendChild(style);
            }

            return this;
        }))
        .pipe(gulp.dest('.'))
});
