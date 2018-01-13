/* Using Node path module to create our 'dist' folder */
var path = require('path');

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
                    /* Set webpack loaders to handle CSS files */
                    test: /\.css$/,
                    /**
                     * The order in which the different loaders are set is important, 
                     * and it goes from last to first (right to left):
                     * - The CSS-LOADER creates a javascript module with all the styles in string like form.
                     * - The STYLE-LOADER then, takes the results made by CSS-LOADER and creates a <style> element 
                     * from it.
                     */
                    loader: ["style-loader", "css-loader"]
                },
                {
                    /* Set webpack loaders to handle SASS scss files */
                    test: /\.scss$/,
                    /* Same as with CSS loaders, only here the first loader (SASS-LOADER) turns SASS code to CSS first */
                    loader:["style-loader","css-loader","sass-loader"]
                },
            ]
        }
};