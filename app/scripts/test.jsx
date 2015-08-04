var CommentList = React.createClass({
    render: function () {
        return (
            <div class="commentList">
                Hello, World! I am a CommentList.
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div class="commentForm">
                Hello, World! I am a CommentForm.
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function () {
        return (
            <div class="contentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});