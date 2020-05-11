const path = require(`path`);

module.exports = (env) => {
    return {
        mode: env ? env.type : `production`,
        entry: `./src/main.js`,
        output: {
            filename: `bundle.js`,
            path: path.join(__dirname, `public`),
        },
        devtool: `source-map`,
        devServer: {
            contentBase: path.join(__dirname, `public`),
            watchContentBase: true,
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        resolve: {
            alias: {
                '@utils': path.resolve(__dirname, `src/utils`),
                '@consts': path.resolve(__dirname, `src/consts`),
            }
        }
    };
};
