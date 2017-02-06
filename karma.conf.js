// Karma configuration
// Generated on Sun Jan 08 2017 21:36:41 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [{
      pattern: 'spec.bundle.js',
      watched: false
    }],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-webpack'),
      require('karma-htmlfile-reporter')
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },


    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: [/app\/lib/, /node_modules/],
          loader: 'ng-annotate!babel'
        },
        {
          test: /\.html$/,
          exclude: [/node_modules/],
          loader: 'html-loader'
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        }]
      }
    },


    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'html'],
    specReporter: {
      showSpecTiming: true // print the time elapsed for each spec
    },
    htmlReporter: {
      outputFile: 'report/units/units.html',

      pageTitle: 'TweetMVC Unit Test',
      subPageTitle: 'A sample application unit testing report',
      groupSuites: false,
      useCompactStyle: false,
      useLegacyStyle: false
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
