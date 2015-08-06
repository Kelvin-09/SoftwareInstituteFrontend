define(['react', 'ReactRouter'], function (React, Router) {
    var Link = Router.Link;

    var Navigation = React.createClass({
        render: function () {
            return (
                <div>
                    Navigation
                    <ul>
                        <li><Link to="news">Dashboard</Link></li>
                        <li><Link to="resource">Inbox</Link></li>
                    </ul>
                </div>
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