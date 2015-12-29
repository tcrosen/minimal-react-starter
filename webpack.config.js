var path = require('path');

module.exports = {
  // Entry points are essentially files that are processed by Webpack as the
  // "entrance" to your application. Note that even though there are many different
  // files used to build the full application, Webpack finds these other files on
  // its own based on module imports & exports.
  entry: {
    app: './src/index.js'
  },

  // Output settings
  output: {
    // [name] will be replaced with the entry point name defined above
    filename: '[name].js',

    // This serves as the virtual path used by Webpack's dev server to reference
    // your built files.
    publicPath: '',

    // This is the physical path where your built application will be located.
    path: path.join(__dirname, 'dist'),
  },

  // Webpack dev server configuration
  devServer: {
    // The base directory for Webpack's dev server to locate files to serve
    contentBase: path.join(__dirname, 'src')
  },

  // Webpack is mostly based around modules. This section teaches Webpack how to deal with
  // different types of files and translate them into modules.
  module: {
    loaders: [{
      // File type(s)
      test: /\.js$/,
      // Directories to include (where to look for files)
      include: path.join(__dirname, 'src'),
      // Which loader(s) to use
      loader: 'babel',
      // Parameters used by the loader
      query: {
        // Out of the box, Babel doesn't know how to interpret your files.
        // These presets are actually collections of plugins, in this case we are
        // telling Babel to parse React (JSX) and ES2015 syntax.
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      // Tip: Loaders are interpreted from right-to-left.
      // This means the SASS loader will first transpile down to CSS,
      // then the CSS loader will transpile down to inline styles.
      // This technique results in no external CSS files served by your application.
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.json$/,
      include: __dirname,
      // Tip: include should be used where possible. In this case since
      // our application reads our package.json file, it needs to look in the root
      // directory, so we exclude the node_modules & dist folders.
      exclude: [
        /node_modules/,
        /dist/
      ],
      loader: 'json'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
  },
};
