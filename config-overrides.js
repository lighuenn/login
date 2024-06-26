// config-overrides.js
const { override } = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = override(
  // Personaliza la configuración de Webpack aquí
  (config) => {
    // Agrega HtmlWebpackPlugin para generar el HTML automáticamente
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: true,
      })
    );

    return config;
  }
);
