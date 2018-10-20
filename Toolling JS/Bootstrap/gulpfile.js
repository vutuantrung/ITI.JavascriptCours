var 
    gulp = require('gulp'),
    path = require('path'),
    // https://github.com/contra/gulp-concat 
    concat = require('gulp-concat'), 
    // https://github.com/scniro/gulp-clean-css
    cleanCSS = require('gulp-clean-css'),
    // https://github.com/terinjokes/gulp-uglify
    uglify = require('gulp-uglify'),
    // https://github.com/floridoo/gulp-sourcemaps
    sourcemaps = require('gulp-sourcemaps'),
    // https://github.com/plus3network/gulp-less
    less = require('gulp-less'),
    // https://github.com/klei/gulp-inject
    inject = require('gulp-inject');
    
// inclure jquery
var sources = [
    'js/bootstrap-transition.js',
    'js/bootstrap-alert.js',
    'js/bootstrap-button.js',
    'js/bootstrap-carousel.js',
    'js/bootstrap-collapse.js',
    'js/bootstrap-dropdown.js',
    'js/bootstrap-modal.js',
    'js/bootstrap-scrollspy.js',
    'js/bootstrap-tab.js',
    'js/bootstrap-tooltip.js',
    'js/bootstrap-popover.js',
    'js/bootstrap-typeahead.js',
    'js/bootstrap-affix.js'
];

/**
 * Concaténer tous les fichiers javascripts contenus dans 'sources'
 */
// => ./dist/js/bootstrap.js
gulp.task('concat', function() {
});

/**
 * Concaténer puis uglifier tous les fichiers javascripts contenus dans 'sources'
 */
// => ./dist/js/bootstrap.js
gulp.task('uglify', function() {
});

/**
 * Générer un fichier bootstrap.css à partir de la source 'less/bootstrap.less'
 */
// => ./dist/css/bootstrap.css
gulp.task('css:bootstrap', function(){
   
});

/**
 * Générer un fichier bootstrap.css à partir de la source 'less/responsive.less'
 */
// => ./dist/css/responsive.css
gulp.task('css:responsive', function(){
   
});

/**
 * Injecter le ficher Javascript généré 'dist/js/bootstrap.js' dans le fichier html  'html/test-js.html'
 * utiliser les options inject : 
 * {
        ignorePath: 'dist',
        addRootSlash: false
    }
 */
// => ./dist/test-js.html
gulp.task('inject:js', ['uglify'], function() {
   
});

/**
 * Injecter les fichers css générés 'dist/css/bootstrap.css' et 'dist/css/responsive.css'  dans le fichier html 'html/css-tests.html'
 * 
 * utiliser les options : 
 * {
 ignorePath: 'dist',
 addRootSlash: false
}
*/
// => ./dist/css-tests.html
gulp.task('inject:css', ['build:css'], function() {
    
});

gulp.task('build:css', ['css:bootstrap', 'css:responsive']);
gulp.task('build', ['inject:css', 'inject:js']);