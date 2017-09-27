const gulp = require('gulp');

gulp.task('default', ['build'], () => {
  // Generate Service Worker (from /sw.js)
  workbox.injectManifest({
    globDirectory: 'build/default/',
    globPatterns: [
      '**/*'
    ],
    swDest: 'build/default/sw.js',
    swSrc: 'sw.js'
  });
});

const babel = require('gulp-babel');
const cssSlam = require('css-slam').gulp;
const del = require('del');
const gulpif = require('gulp-if');
const htmlMinifier = require('gulp-htmlmin');
const HtmlSplitter = require('polymer-build').HtmlSplitter;
const mergeStreams = require('merge-stream');
const PolymerProject = require('polymer-build').PolymerProject;
const uglify = require('gulp-uglify');
const workbox = require('workbox-build');

gulp.task('clean', () => {
  return del([
    'build/'
  ]);
});

gulp.task('build', ['clean'], () => {
  const project = new PolymerProject(require('./polymer.json'));
  const sourcesHtmlSplitter = new HtmlSplitter();

  // Transform code
  const dependencies = project.dependencies()
    .pipe(sourcesHtmlSplitter.split())
    .pipe(gulpif(/\.css$/, cssSlam({
      stripWhitespace: true
    })))
    .pipe(gulpif(/\.html$/, cssSlam({
      stripWhitespace: true
    })))
    .pipe(gulpif(/\.html$/, htmlMinifier({
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(gulpif(/\.js$/, babel({ presets: ['es2015'] })))
    .pipe(gulpif(/\.js$/, uglify()))
    .pipe(sourcesHtmlSplitter.rejoin())
    ;
  const sources = project.sources()
    .pipe(sourcesHtmlSplitter.split())
    // .pipe(gulpif(/\.css$/, cssSlam({
    //   stripWhitespace: true
    // })))
    // .pipe(gulpif(/\.html$/, cssSlam({
    //   stripWhitespace: true
    // })))
    // .pipe(gulpif(/\.html$/, htmlMinifier({
    //   collapseWhitespace: true,
    //   removeComments: true
    // })))
    .pipe(gulpif(/\.js$/, babel({ plugins: ['transform-es2015-modules-systemjs'], presets: ['es2015'] })))
    // .pipe(gulpif(/\.js$/, uglify()))
    // .pipe(sourcesHtmlSplitter.rejoin())
    .pipe(project.addCustomElementsEs5Adapter())
    ;

  // Combine sources and dependencies
  const stream = mergeStreams(sources, dependencies)
    .pipe(gulp.dest('build/default/'))
    ;

  // Copy Web Components polyfills
  gulp.src('bower_components/webcomponentsjs/*ents*.js')
  .pipe(gulp.dest('build/default/bower_components/webcomponentsjs/'));

  // Copy Workbox files
  gulp.src('workbox-sw*')
  .pipe(gulp.dest('build/default/'));

  return stream;
});
