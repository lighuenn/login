const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Punto de entrada principal de tu aplicación React
    output: {
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida para los archivos generados por Webpack
        filename: 'bundle.js', // Nombre del archivo de salida generado por Webpack
        publicPath: '/', // Ruta relativa para todos los recursos generados por Webpack
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Extensiones de archivos que Webpack resolverá automáticamente
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Expresión regular para archivos JavaScript y JSX
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Utilizar babel-loader para transpilar JavaScript y JSX
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Presets de Babel
                    },
                },
            },
            {
                test: /\.css$/, // Expresión regular para archivos CSS
                use: ['style-loader', 'css-loader'], // Utilizar style-loader y css-loader para manejar archivos CSS
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Ruta al archivo HTML de tu aplicación
            filename: 'index.html', // Nombre del archivo HTML generado por HtmlWebpackPlugin
        }),
    ],
    devServer: {
        historyApiFallback: true, // Permitir la navegación por rutas en el navegador
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta base para servir archivos estáticos
        compress: true, // Habilitar compresión gzip para todos los recursos servidos
        port: 3000, // Puerto del servidor de desarrollo
    },
};
