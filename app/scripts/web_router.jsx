/**
 * Created by kelvinsun on 2015/8/5.
 */
define(
    ['react', 'ReactRouter', 'view/main', 'view/browse', 'view/index', 'view/news', 'view/resource', 'view/detail', 'view/error'],
    function (React, Router, main, browse, index, news, resource, detail, error) {
    var Route = Router.Route,
        DefaultRoute = Router.DefaultRoute,
        NotFoundRoute = Router.NotFoundRoute;
    var routes = (
        <Route name="main" path="/" handler={main}>
            <Route name="index" path="index" handler={index}/>
            <Route name="browse" path="browse" handler={browse}>
                <Route name="news" path="news/:newsId" handler={news}/>
                <Route name="resource" path="resource" handler={resource}/>
                <Route name="detail" path="detail" handler={detail}/>
                <DefaultRoute handler={news} params={{ newsId:123 }}/>
                <NotFoundRoute handler={error}/>
            </Route>
            <DefaultRoute handler={index}/>
            <NotFoundRoute handler={error}/>
        </Route>
    );
    return routes;
});