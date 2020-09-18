// webpack runs in node js environment

// In webpack there are four core concepts
// 1.entry point 2.output 3.loaders 4.plugins

const path = require('path');

module.exports = {
  // starting with entry point - specify entry property
  // Entry point is one or more files where & from which webpack starts bundling
  entry: './index.js',

  // Output property which will tell Webpack exactly where to save or bundle file
  // here, we specify an object
  output: {
    // path to the file name must be absolute path
    // Have to use node package - path
    // path.resolve to join current working directory & location of new bundle file
    path: path.resolve(__dirname, 'dir'),
    // standard name for webpack output, can be main.js also
    filename: 'bundle.js', 
  },
  // in dev mode, simply builds our bundle without minifying our code
  // to be fast as possible 
  mode: 'development'

}