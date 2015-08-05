/**
 * Created by kelvinsun on 2015/8/5.
 */
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        view: '../view',
        module: '../module',
        common: '../common'
    }
});

requirejs(['jquery', 'react', 'ReactRouter', 'module/index'], function (jquery, React, Router, index) {
    //index(jquery('#content')[0]);
});
