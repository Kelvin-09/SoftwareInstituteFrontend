/**
 * Created by kelvin on 15-8-8.
 */
define(['jquery'], function ($) {
    function joinUrl(inConfig) {
        var config = {
            protocol: location.protocol || 'http:',
            host: location.host,
            path: ''
        };
        $.extend(config, inConfig);
        return config.protocol + '//' + config.host + config.path;
    }

    return {
        joinUrl: joinUrl
    };
});