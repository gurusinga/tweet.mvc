var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000000
  },
  specs: [__dirname + '/e2e/e2e.test.js'],
  onPrepare: function() {
    require('babel-register');
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './report/e2e/',
        cleanDestination: false,
        fileNameDateSuffix: true,
        fileNamePrefix: 'MVC',
        fileNameSeparator: '-',
        fileName: 'report',
        screenshotsFolder: 'images'
      })
    );
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
};
