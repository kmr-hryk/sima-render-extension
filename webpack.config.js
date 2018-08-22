require('webpack');
require('babel-polyfill');

const DEBUG = !process.argv.includes('--release');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'override.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    modules: false,
                    targets: {
                      browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                    }
                  }
                ],
                'stage-2'
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false
};
