/* Using Node path module to create our 'dist' folder */
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
        /* This is where we add our entry file, from which the bundle is going to be created */
        entry: './src/app/entry.js',
        
        /* This is where we et the name and location of the bundle file */
        output: {
                /* Path.resolve returns an absolute path of a list of directories.  
                   __dirname gives us the name of the current directory  */
                path: path.resolve(__dirname,'dist'),
                filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader","sass-loader"]
                    })
                },
                {
                    test:/\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            // options: {
                            //     publicPath:"./public"
                            // }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new ExtractTextWebpackPlugin("styles.css")
        ]
};