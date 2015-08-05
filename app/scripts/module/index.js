/**
 * Created by kelvinsun on 2015/8/5.
 */
define(function (require, exports, module) {
    var $ = require('jquery'),
        React = require('react'),
        test = require('view/test');

    return {
        render: function () {
            React.render(
                React.createElement(test, {}),
                $('#content')[0]
            );
        }
    };
});