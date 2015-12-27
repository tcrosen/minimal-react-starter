var path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },

  output: {
    filename: '[name].js',
    publicPath: '',
    path: path.join(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'src')
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
  },
};
