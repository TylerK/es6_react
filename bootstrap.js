require('babel/register')({
  ignore: /node_modules/,
  extensions: ['.js', '.jsx']
})
require('./app');
