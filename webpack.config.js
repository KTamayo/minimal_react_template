const path = require('path');

module.exports = {
  context: path.join(__dirname__, 'src'),
  entry: [ 
      './main.js',
  ],
  output: {
    path: path.join(__dirname__, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname__, 'node_modules'), 
    ],
  }, 
};
