/* Using Node path module to create our 'dist' folder */
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
        /* This is where we add our entry file, from which the bundle is going to be created */
        entry: './src/app/entry.js',
        
        /* This is where we set the name and location of the bundle file(s) */
        output: {
                /* Path.resolve returns an absolute path of a list of directories.  
                   __dirname gives us the name of the current directory  */
                path: path.resolve(__dirname,'dist'),
                filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    /* Set webpack loaders to handle CSS files */
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
                            /*
                             * Here we set loader options 
                             */
                            options:{
                                /* We tell the loader to put the images in '/images'/ directory */
                                outputPath:'./images/',
                                /* We tell the loader to use the original image name and extension */
                                name:'[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            /* Clean the dist directory before each buid */
            new CleanWebpackPlugin('./dist'),

            /* Extract all CSS to "styles.css" file and crete link element on header */
            new ExtractTextWebpackPlugin("styles.css")
        ]
};