const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
    // NEW pages should be added here i.g. if you need to create
    // contacts page you need add folder to src,
    // and add path and name to entry array
    const VENDORS_NAME = 'vendors';
    const entry = {
        index: ['babel-polyfill', './src/index/index.js'],
        alina_moskalenko_h_w_6: ['./src/alina_moskalenko_h_w_6/alina_moskalenko_h_w_6.js'],
        'lesson_6-1': ['./src/lesson_6-1/lesson_6-1.js'],
        lesson_8_1: ['./src/lesson_8_1/lesson_8_1.js'],
        alina_moskalenko_h_w_8: ['./src/alina_moskalenko_h_w_8/alina_moskalenko_h_w_8.js'],
        lesson9: ['./src/lesson9/lesson9.js'],
        lesson_10: ['./src/lesson_10/lesson_10.js'],
        lightbulb: ['./src/lightbulb/lightbulb.js'],
        articles_menu: ['./src/articles_menu/articles_menu.js'],
        lesson_11_1: ['./src/lesson_11_1/lesson_11_1.js'],
        tab_menu: ['./src/tab_menu/tab_menu.js'],
        clock: ['./src/clock/clock.js'],
        comments: ['./src/comments/comments.js'],
        sidebar_react: ['./src/sidebar_react/sidebar_react.js'],
        comment_page: ['./src/comment_page/comment_page.js'],
        infobox: ['./src/infobox/infobox.js'],
        speakStarter: ['./src/speakStarter/speakStarter.js'],
    };

    const plugins = Object.keys(entry).reduce((acc, name) => {
        acc.push(new HtmlWebpackPlugin({
            chunksSortMode: 'manual',
            title: `${name}`,
            template: `./src/${name}/${name}.html`,
            chunks: [VENDORS_NAME, name],
            filename: `./${name}.html`,
        }));
        acc.push(new ExtractTextPlugin({
            filename: `[name].css`,
            allChunks: false
        }));

        return acc;
    }, []);

    plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: VENDORS_NAME,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            'typeof window': JSON.stringify('object')
        })
    ]);

    entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

    return {
        entry,
        output: {
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    ]
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
                    })
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                    loader: 'file-loader?publicPath=./&name=assets/images/[name].[ext]'
                },
                {
                    test: /\.(eot|ttf|woff|woff2|otf)$/,
                    loader: 'file-loader?publicPath=./&name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins
    };
};

module.exports = baseConf;