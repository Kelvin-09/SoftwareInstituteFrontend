/**
 * Created by kelvinsun on 2015/8/5.
 */
define(['react'], function (React, test) {
    return function (view) {
        React.render(
            React.createElement(test, {}),
            view
        );
    };
});