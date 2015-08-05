define(['react', 'view/public'], function (React, templatePublic) {
    var Navigation = templatePublic.Navigation,
        Footer = templatePublic.Footer;

    var Scroll = React.createClass({
        render: function () {
            return (
                <div>Scroll</div>
            );
        }
    });

    var Notice = React.createClass({
        render: function () {
            return (
                <div>Notice</div>
            );
        }
    });

    var News = React.createClass({
        render: function () {
            return (
                <div>News</div>
            );
        }
    });

    var Resource = React.createClass({
        render: function () {
            return (
                <div>Resource</div>
            );
        }
    });

    var Index = React.createClass({
        render: function () {
            return (
                <div>
                    <Navigation />
                    <Scroll />
                    <Notice />
                    <News />
                    <Resource />
                    <Footer />
                </div>
            );
        }
    });
    return Index;
});