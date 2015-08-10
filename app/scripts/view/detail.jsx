define(['react', 'view/public'], function (React, templatePublic) {
    var TitleLine = templatePublic.TitleLine,
        Shortcut = templatePublic.Shortcut;
    var Detail = React.createClass({
        render: function () {
            var newsId = this.props.params.newsId;
            console.log(newsId);
            return (
                <div>
                    <Shortcut/>
                    <TitleLine/>
                    <article>123</article>
                </div>
            );
        }
    });
    return Detail;
});