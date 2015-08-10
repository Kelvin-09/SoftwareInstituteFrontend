/**
 * Created by kelvin on 15-8-8.
 */
define(['jquery', 'root/config', 'common/network'], function ($, config, network) {
    var server = network.joinUrl({
        protocol: config.protocol,
        host: config.host,
        path: config.path
    });

    function NavigatorCategory (callback) {
        if (!callback) {
            return;
        }
        var url = server + '/NavigatorCategory';
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).success(function (data, status, xhr) {
            callback(null, data);
        }).error(function (xhr, status, error) {
            callback(error);
        });
    }

    function NewsList (callback, newsType, id, pageSize, pageRequest) {
        if (!id || !callback) {
            return;
        }
        var data, url = server + ('outline' === newsType ? '/NewsListOutline' : '/NewsListCategory');
        pageSize = pageSize || config.pageSize;
        pageRequest = pageRequest || config.pageRequest;
        data = {
            pageSize : pageSize,
            pageRequest: pageRequest
        };
        data['outline' === newsType ? 'outlineId' : 'categoryId'] = id;
        $.ajax({
            url: url,
            type: 'GET',
            data: data,
            dataType: 'json'
        }).success(function (data, status, xhr) {
            callback(null, data);
        }).error(function (xhr, status, error) {
            callback(error);
        });
    }

    return {
        NavigatorCategory: NavigatorCategory,
        NewsList: NewsList
    };
});