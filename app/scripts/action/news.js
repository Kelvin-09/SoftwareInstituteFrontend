/**
 * Created by kelvin on 15-8-8.
 */
define(['jquery', 'action/config', 'common/network'], function ($, config, network) {
    var server = network.joinUrl({
        protocol: config.protocol,
        host: config.host,
        path: config.path
    });

    function NavigatorCategory (callback) {
        var url = server + '/NavigatorCategory';
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
        NavigatorCategory: NavigatorCategory
    };
});