var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // deux points d'entrés
    entry: {
        styles: "",
        app: ""
    },
    // deux fichiers en sortie
    output: {
        path:  "./dist/js",
        filename: ""
    },
    module: {
        // loader babel et css
        loaders: []
    },
    // Uglification 
    // Eliminer le dependences communes:  webpack.optimize.CommonsChunkPlugin
    // minification:  webpack.optimize.UglifyJsPlugin
    // Injecter le tout dans le HTML
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'styles']
        }),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: '', //source
            filename:  '' // relatif par rapport au path spécifié plus haut dans output.path
        })
    ]
};
