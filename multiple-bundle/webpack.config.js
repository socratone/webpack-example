const path = require('path');

module.exports = {
  entry: {
    first: './src/first.js',
    second: './src/second.js',
  },
  output: {
    filename: '[name].bundle.js', // => first.bundle.js, second.bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
};
