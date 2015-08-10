define(['react', 'view/public'], function (React, templatePublic) {
    var TitleLine = templatePublic.TitleLine;
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
                <div>
                    <Shortcut/>
                    <TitleLine/>
                    <ul>
                        <NewsItem/>
                    </ul>
                </div>
            );
        }
    });
    return NewsList;
});