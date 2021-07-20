const path = require('path');

module.exports = {
  mode: 'development',
//   entry: './src/index.js',
   entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    // filename: 'main.js',
    // filename:'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};