// Babel for all the things!
require('babel/register')({
  ignore: /node_modules/,
  extensions: ['.js', '.jsx']
})
require('./app');
