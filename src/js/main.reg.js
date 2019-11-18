require.config({
    paths: {
        jquery: "./jquery.min",
        reg: "./lib/reg",
    },
    shim: {}
});

require(['jquery', 'reg'], function($, reg) {
    reg.render();
});