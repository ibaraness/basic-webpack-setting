/* Using Node path module to create our 'dist' folder */
var path = require('path');
var webpack = require('webpack');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
        
        /* This is where we add our entry file, from which the bundle is going to be created */
        entry: {
            polyfills:'./polyfills.js',
            main: './src/app/entry.js',
            vendor:['jquery']
        },
        
        /* This is where we set the name and location of the bundle file(s) */
        output: {
                /* Path.resolve returns an absolute path of a list of directories.  
                   __dirname gives us the name of the current directory  */
                path: path.resolve(__dirname,'dist'),

                /* Create scripts that will be loaded dynamically */
                chunkFilename: '[name].bundle.js',

                /* Use the name declared in the entry object */
                filename: '[name].js'
        },
        module: {
            rules: [
                {
                    /* Set webpack loaders to handle SASS scss files */
                    test: /\.scss$/,
                    
                    /* Here we are using a special plugin to let us extract our styles to different files */
                    use: ExtractTextWebpackPlugin.extract({

                        /* If something goes wrong, load css with the style loader */
                        fallback: "style-loader",

                        /* Here we tell the plugin what loaders to use in order to create CSS files */
                        use: ["css-loader","sass-loader"]
                    })
                },
                {
                    /* Set webpack loaders to handle image and vector files */
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
            new ExtractTextWebpackPlugin("styles.css"),

            /* Prepare HTML file using a template with our bundle files */
            new HtmlWebpackPlugin({
                template:'./src/index.html',
                inject:'body'
            }),
            /* Divide our bundles to different chunks by our settings and prevent duplication */
            new webpack.optimize.CommonsChunkPlugin({
                name:'vendor'
            })
        ]
};