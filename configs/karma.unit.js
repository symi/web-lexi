var webpackConfig = require('./webpack.base');
const path = require('path');

webpackConfig.module.rules = webpackConfig.module.rules.concat([
    {
        test: /\.ts$/,
        use: {
            loader: 'istanbul-instrumenter-loader',
            options: {
                esModules: true
            }
        },
        enforce: 'post',        
        exclude: [
            path.resolve(__dirname, '../node_modules'),
            /\.spec\.ts$/,
            path.resolve(__dirname, '../test')
        ]
    }
]);

// using tests as entry points, so only good for unit tests not e2e as this karma 
// test will create an entirely different webpack bundle compared to dev/production builds.
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            '../test/tests.ts'
        ],
        exclude: [],
        preprocessors: {
            '../test/tests.ts': ['webpack', 'sourcemap']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            devtool: webpackConfig.devtool
        },
        reporters: ['coverage-istanbul', 'mocha'],
        coverageIstanbulReporter: {
            reports: [ 'html', 'text', 'lcov' ],
            fixWebpackSourcePaths: true
        },
        autoWatch: true,
        autoWatchBatchDelay: 4000, // autosave enabled in ide, stops spamming
        browsers: ['Chrome'],
        singleRun: false,
        mime: { 
            'text/x-typescript': ['ts','tsx'] 
        }
    });
}
