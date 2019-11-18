require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/index1",
        lazyload: "./jquery.lazyload.min"
    },
    shim: {
        lazyload: ['jquery']
    }
});

require(['jquery', 'index', 'lazyload'], function($, index, lazyload) {
    index.render();
    index.head();

})