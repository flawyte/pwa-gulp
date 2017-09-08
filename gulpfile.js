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

const del = require('del');
const mergeStreams = require('merge-stream');
const PolymerProject = require('polymer-build').PolymerProject;
const project = new PolymerProject(require('./polymer.json'));
const workbox = require('workbox-build');

gulp.task('clean', () => {
  return del([
    'build/'
  ]);
});

gulp.task('build', ['clean'], () => {
  const stream = mergeStreams(project.sources(), project.dependencies())
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
