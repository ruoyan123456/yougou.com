require.config({
    paths: {
        jquery: "./jquery.min",
        product: "./lib/product",
        cookie: "./cookie"
    },
    shim: {}
});

require(['jquery', 'product', 'cookie'], function($, product, cookie) {
    product.render();
    product.head();

});