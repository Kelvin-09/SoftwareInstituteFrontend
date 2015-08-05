/**
 * Created by kelvinsun on 2015/8/5.
 */
define(['react', 'ReactRouter', 'view/main', 'view/index'], function (React, Router, main, index) {
    var Route = Router.Route,
        DefaultRoute = Router.DefaultRoute;
    var routes = (
        <Route name="main" path="/" handler={main}>
            <Route name="index" path="index" handler={index}/>
            <DefaultRoute handler={index}/>
        </Route>
    );
    return routes;
});