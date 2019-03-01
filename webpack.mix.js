const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/shared-app.js', 'public/js')
    .js('resources/js/custom-input.js', 'public/js')
    .js('resources/js/router-app.js', 'public/js')
    .js('resources/js/counts.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/router.scss', 'public/css')
    .version();

if (mix.inProduction()) {
    mix.version();
}
