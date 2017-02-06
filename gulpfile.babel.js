/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack-stream';
import karma from 'karma';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config';

const root = 'src';
const rootDist = 'dist';

// helper method for resolving paths
const resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

// map of all paths
const paths = {
  js: resolveToApp('**/*!(.test.js).js'),
  css: resolveToApp('**/*.css'),
  html: [
    resolveToApp('**/*.html'),
    path.join(rootDist, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: rootDist
};

gulp.task('test', (done) => {
  new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('webpack', () =>
  gulp.src(paths.entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.output))
);

gulp.task('reload', ['webpack'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('serve', ['webpack'], () => {
  browserSync({
    port: 3000,
    open: false,
    server: { baseDir: rootDist }
  });
});

gulp.task('watch', ['serve'], () => {
  const allPaths = [].concat([paths.js], paths.html, [paths.css]);
  gulp.watch(allPaths, ['reload']);
});

gulp.task('default', ['watch']);
