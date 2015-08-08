define(['react', 'ReactRouter', 'action/news', 'common/util'], function (React, Router, actionNews, util) {
    var Link = Router.Link;

    var Outline = React.createClass({
        getInitialState: function () {},
        render: function () {
            return (
                <li>
                    <ul></ul>
                </li>
            );
        }
    });

    var Navigation = React.createClass({
        getInitialState: function () {
            return {
                outlineCategory: {}
            };
        },
        componentWillMount: function () {
            actionNews.OutlineCategory(function (err, data) {
                if (err) {
                    location.hash = '#notFound/' + err;
                } else {
                    this.setState({
                        outlineCategory: data
                    });
                }
            }.bind(this));
        },
        render: function () {
            var outlines = [], tempOutline = this.state.outlineCategory;
            for (var i in tempOutline) {
                if (util.hasOwnProperty.call(tempOutline, i)) {

                }
            }
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