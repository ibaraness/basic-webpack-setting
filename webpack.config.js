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
                /* 
                    CSS loaders 
                    The order of loaders are from right to left:
                     - 'css-loader' turn the css code into javascript module (string) webpack can read.
                     - 'style-loader' creates a <style> element and add the CSS code into it.
                */
                {
                    test: /\.css$/,
                    loader: ["style-loader", "css-loader"]
                },
                /* SASS loaders */
                {
                    test: /\.scss$/,
                    loader:["style-loader","css-loader","sass-loader"]
                },
            ]
        }
};