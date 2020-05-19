const path = require(`path`);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env ? env.type : `production`,
        entry: `./src/main.js`,
        output: {
            filename: `bundle.js`,
            path: path.join(__dirname, `public`),
            publicPath: `/public`

        },
        devtool: `source-map`,
        devServer: {
            contentBase: path.join(__dirname, `public`),
            watchContentBase: true,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'sass-loader']
                        }),
                    // use: [
                    //     `style-loader`,
                    //     `css-loader`,
                    //     `sass-loader`,
                    // ],
                }
            ],
        },
        plugins: [
            new ExtractTextPlugin(
                {filename: 'style.css'}
            ),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './source/index.html',
                filename: 'index.html'
            })
        ],
        resolve: {
            alias: {
                '@mixin': path.resolve(__dirname, `source/mixin`),
                '@consts': path.resolve(__dirname, `src/consts`),
            }
        }
    };
};
