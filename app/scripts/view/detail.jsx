define(['react', 'view/public'], function (React, templatePublic) {
    var TitleLine = templatePublic.TitleLine;
    var Detail = React.createClass({
        render: function () {
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