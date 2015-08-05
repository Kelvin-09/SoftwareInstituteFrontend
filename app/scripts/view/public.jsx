define(['react'], function (React) {
    var Navigation = React.createClass({
        render: function () {
            return (
                <div>Navigation bar</div>
            );
        }
    });

    var Footer = React.createClass({
        render: function () {
            return (
                <div>Footer</div>
            );
        }
    });

    return {
        Navigation: Navigation,
        Footer: Footer
    };
});