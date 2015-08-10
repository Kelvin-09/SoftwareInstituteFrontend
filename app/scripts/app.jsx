/**
 * Created by kelvinsun on 2015/8/5.
 */
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        action: '../action',
        common: '../common',
        view: '../view',
        root: '..'
    }
});

requirejs(['react', 'ReactRouter', 'jquery', '../web_router'], function (React, Router, jquery, routes) {
    Router.run(routes, Router.HashLocation, function (Handler) {
        React.render(<Handler />, jquery('#content')[0]);
    });
});
