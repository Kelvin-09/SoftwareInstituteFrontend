define(['react'], function (React) {
    var NewsItem = React.createClass({
        render: function () {
            return (
                <li><a href="#">1</a></li>
            );
        }
    });
    var NewsList = React.createClass({
        render: function () {
            return (
                <ul>
                    <NewsItem />
                </ul>
            );
        }
    });
    return NewsList;
});