const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      UglifyJsPlugin = require('uglify-js-plugin');

module.exports = {
    entry: {
        admin: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist',
        // sourseMapFilename: 'bundle.map'
    },
    // devtool: '#source-map'
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    // query: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { 
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loaders: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: 'images/[name].[ext]',
                      }
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true, 
                            config: { path: 'src/js/postcss.config.js' } 
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './admin.php'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new UglifyJsPlugin({
            sourseMap: true,
            warnings: false,
            mangle: true
        })
    ]
}  