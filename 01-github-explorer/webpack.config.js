const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',         // Indicar se o ambiente é de desenvolvimento ou produção
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),         // Indicar arquivo inicial da aplicação
    output: {                                                   // Arquivo que será gerado com o webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {                                                  // Indicar quais arquivos ele pode ler
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        static: path.resolve(__dirname, 'public'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    module: {                                                   // Configurações a aplicação se comportara quando importar arquivos
        rules: [
            {
                test: /\.jsx$/,                                 // Expressão regular para dizer se é um arquivo JS ou não
                exclude: /node_modules/,                        // Excluir pasta nodule modules
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
};