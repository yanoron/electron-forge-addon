const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [
    { 
      loader: 'style-loader',
    },
    { 
      loader: 'css-loader',
      options: {
        modules: true,
      },
    }
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
