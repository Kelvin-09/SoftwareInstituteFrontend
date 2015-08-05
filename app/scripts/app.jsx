/**
 * Created by kelvinsun on 2015/8/5.
 */
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        view: '../view',
        module: '../module',
        common: '../common'
    }
});

requirejs(['jquery', 'react', 'ReactRouter', 'module/index'], function (jquery, React, Router, index) {
    //index(jquery('#content')[0]);
    var Route = Router.Route;

    var About = React.createClass({
        render: function () {
            return (
                <h2>About</h2>
            );
        }
    });
    var Inbox = React.createClass({
        render: function () {
            return (
                <h2>Inbox</h2>
            );
        }
    });
    var Message = React.createClass({
        render () {
            return (
                <h3>Message</h3>
            );
        }
    });

    var App = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>APP</h1>
                    <RouteHandler />
                </div>
            );
        }
    });

    var routes = (
        <Route handle={App}>
            <Route path="about" handler={About} />
            <Route path="inbox" handler={Inbox}>
                <Route path="message/:id" handler={Message}></Route>
            </Route>
        </Route>
    );

    Router.run(routes, Router.HashLocation, function (Root) {
        React.render(<Root />, document.body);
    });
});
