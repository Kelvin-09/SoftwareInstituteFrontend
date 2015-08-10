define(['react', 'view/public'], function (React, templatePublic) {
    var TitleLine = templatePublic.TitleLine;
    var ResourceItem = React.createClass({
        render: function () {
            return (
                <li><a href="#">1</a></li>
            );
        }
    });
    var ResourceList = React.createClass({
        render: function () {
            return (
                <div>
                    <Shortcut/>
                    <TitleLine/>
                    <ul>
                        <ResourceItem />
                    </ul>
                </div>
            );
        }
    });
    return ResourceList;
});