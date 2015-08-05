define(['react'], function (React) {
    var Navigation = React.createClass({
        render: function () {
            return (
                <div>Navigation</div>
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

    var ShortcutItem = React.createClass({
        render: function () {
            return (
                <li><a href="#">1</a></li>
            );
        }
    });

    var Shortcut = React.createClass({
        render: function () {
            return (
                <ul>
                    <ShortcutItem />
                </ul>
            );
        }
    });

    return {
        Navigation: Navigation,
        Footer: Footer,
        Shortcut: Shortcut
    };
});