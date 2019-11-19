require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/index1",
        lazyload: "./jquery.lazyload.min",
        slider: "./jquery.slider"
    },
    shim: {
        lazyload: ['jquery'],
        slideer: ['jquery']
    }
});

require(['jquery', 'index', 'lazyload', 'slider'], function($, index, lazyload, slider) {
    index.render();
    index.head();
    index.slider();
})