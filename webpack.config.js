const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = {
  entry: './app/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([{ from: './app/index.html', to: 'index.html' }])
  ]
};

module.exports = config;
