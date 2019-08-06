const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const config = {
    entry: {
      app: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };

  if (options.mode === 'development') {
    config.devServer = { contentBase: path.join(__dirname, 'src') };
    config.plugins = [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ];
  }

  if (options.mode === 'production') {
    config.plugins = [new HtmlWebpackPlugin()];
  }

  return config;
};
