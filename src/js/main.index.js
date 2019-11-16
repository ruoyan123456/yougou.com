require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/index1"
    },
    shim: {}
});

require(['jquery', 'index'], function($, index) {
    index.render();
    index.head();
})