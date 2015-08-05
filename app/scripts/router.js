/**
 * Created by kelvinsun on 2015/8/5.
 */
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        view: '../view',
        module: '../module'
    }
});
requirejs(['module/index'], function (index) {
    index.render();
});