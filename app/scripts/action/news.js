/**
 * Created by kelvin on 15-8-8.
 */
define(['jquery', 'action/config', 'common/network'], function ($, config, network) {
    var server = network.joinUrl({
        protocol: config.protocol,
        host: config.host,
        path: config.path
    });

    function OutlineCategory (callback) {
        var url = server + '/OutlineCategory';
        $.ajax({
            'url': url,
            'type': 'GET',
            'dataType': 'json'
        }).success(function (data, status, xhr) {
            callback(null, data);
        }).error(function (xhr, status, error) {
            callback(error);
        });
    }

    return {
        OutlineCategory: OutlineCategory
    };
});