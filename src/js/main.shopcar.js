require.config({
    paths: {
        jquery: "./jquery.min",
        shopcar: "./lib/shopcar",
        cookie: "./cookie"
    },
    shim: {}
});

require(['jquery', 'shopcar', 'cookie'], function($, shopcar, cookie) {
    shopcar.render();
});