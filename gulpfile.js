var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    dom = require('gulp-dom'),
    fs = require('fs'),
    path = require('path'),
    htmlbeautify = require('gulp-html-beautify');

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            console.log(fs.statSync(path.join(dir, file)).isDirectory())
            if(file.indexOf('_') > -1 || file === 'media' || file == 'wp-content' || file == 'nextversion') {
                return false;
            }

            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('mergeCss', function() {
    return gulp
        .src(['./css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(cleanCss({level:{1:{specialComments:0},2:{removeDuplicateRules:true}}}))
        .pipe(gulp.dest('static'))
});

gulp.task('extractContent', function () {
    return gulp
        .src('./static/news/*.html')
        .pipe(dom(function() {
            let article = this.querySelector('#middle');
            console.log(article.innerHTML)
            return article.innerHTML;
        }))
        .pipe(gulp.dest('./static/news/'))
});

gulp.task('news', function() {
   var folders = getFolders('static/news');

   var tasks = folders.map(function(folder) {
      return gulp.src(path.join('static/news', folder, '/index.html'))
        .pipe(gulp.dest('./'))
        .pipe(rename(folder + '.html')) 
        .pipe(gulp.dest('static/news'));
   });

   return tasks;
});

gulp.task('removeStyles', function () {
    return gulp
        .src('static/news/*/*.html',  { base: "./" })
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

gulp.task('injectStyles', function () {
    return gulp
        .src('static/news/*/*.html',  { base: "./" })
        .pipe(dom(function() {
            let style = this.createElement('link')
            let head = this.querySelector('head');

            if(head) {
                style.setAttribute('href', '/styles.css');
                style.setAttribute('rel', 'stylesheet');
                head.appendChild(style);
            }

            return this;
        }))
        .pipe(gulp.dest('.'))
});


gulp.task('extractArticles', function () {
    let options = {
        indentSize: 4
    };

    return gulp
        .src('./vue/news/*.html')
        .pipe(dom(function() {
            let article = this.querySelector('article');

            return article.outerHTML;
        }))
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest('./vue/news/'))
});

gulp.task('renameRootFiles', function() {
    var folders = getFolders('static');

    var tasks = folders.map(function(folder) {
       return gulp.src(path.join('static', folder, '/index.html'))
         .pipe(gulp.dest('./'))
         .pipe(rename(folder + '.html')) 
         .pipe(gulp.dest('vue'));
    });
 
    return tasks;
 });

 gulp.task('renameOurMission', function() {
    var folders = getFolders('static/our-mission');

    var tasks = folders.map(function(folder) {
       return gulp.src(path.join('static/our-mission', folder, '/index.html'))
         .pipe(gulp.dest('./'))
         .pipe(rename(folder + '.html')) 
         .pipe(gulp.dest('vue/our-mission'));
    });
 
    return tasks;
 });

 gulp.task('extractMiddleInner', function () {
    let options = {
        indentSize: 4
    };

    return gulp
        .src('./vue/our-mission/*.html')
        .pipe(dom(function() {
            let inner = this.querySelector('.middle_inner');

            return inner.outerHTML;
        }))
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest('./vue/our-mission/'))
});

gulp.task('extractNews', () => {
    let counter = 0;

    let all = JSON.stringify([]);

    fs.writeFileSync('news.json', all, (err) => {
        if (err) {
            throw err;
        }
    });

    return gulp
        .src('./HTML/news/*.html')
        .pipe(dom(function() {
            counter ++;

            let date, article;

            let title = this.querySelector('.entry-title').innerHTML;

            let dateText = this.querySelector('.published').innerHTML;

            if(dateText) {
                let dateArray = dateText.split('.');
                date = new Date(dateArray[2], dateArray[1], dateArray[0]).toISOString();
            }

            let text = [];
            let paragraphs = this.querySelectorAll('div.entry-content p');

            let photos = [];
            let images = this.querySelectorAll('li a');

            paragraphs.forEach((el) => {
                let content = el.innerHTML;

                if(content) {
                    text.push(content.replace(/"/g, `'`).replace(/(\r\n|\n|\r)/gm, "").trim());
                }
            });

            images.forEach((el) => {
                let src = el.toString();

                if(src) {
                    photos.push(src.replace('/_content/images/', ''));
                }
            });

            article = {
                id: counter,
                title: title,
                text: text,
                photos: photos,
                date: date
            };

            let rawdata = fs.readFileSync('news.json');
            let allNews = JSON.parse(rawdata);

            allNews.push(article);

            fs.writeFileSync('news.json', JSON.stringify(allNews), (err) => {
                if (err) {
                    throw err;
                }
            });
        }))
});