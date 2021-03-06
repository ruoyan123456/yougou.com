require.config({
    paths: {
        jquery: "./jquery.min",
        reg: "./lib/reg",
        md5: "jquery.md5"
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'reg', 'md5'], function($, reg, md5) {
    reg.render();
});