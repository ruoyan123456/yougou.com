require.config({
    paths: {
        jquery: "./jquery.min",
        login: "./lib/login",
        md5: "jquery.md5"
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'login', 'md5'], function($, login, md5) {
    login.render();
});