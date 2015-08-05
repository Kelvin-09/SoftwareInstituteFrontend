/**
 * Created by kelvinsun on 2015/8/5.
 */
define(
    ['react', 'ReactRouter', 'view/main', 'view/browse', 'view/index', 'view/news', 'view/resource', 'view/detail'],
    function (React, Router, main, browse, index, news, resource, detail) {
    var Route = Router.Route,
        DefaultRoute = Router.DefaultRoute;
    var routes = (
        <Route name="main" path="/" handler={main}>
            <Route name="index" path="index" handler={index}/>
            <Route name="browse" path="browse" handler={browse}>
                <Route name="news" path="news" handler={news}/>
                <Route name="resource" path="resource" handler={resource}/>
                <Route name="detail" path="detail" handler={detail}/>
                <DefaultRoute handler={news}/>
            </Route>
            <DefaultRoute handler={index}/>
        </Route>
    );
    return routes;
});