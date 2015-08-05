define(['react'], function (React) {
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
                <ul>
                    <ResourceItem />
                </ul>
            );
        }
    });
    return ResourceList;
});