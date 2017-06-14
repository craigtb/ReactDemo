var React = require('react');
var ReactDOM = require('react-dom');
var CraigsApp = require('./CraigsApp.js');
var Content = require('./Content.js');

var App = React.createClass({

    render: function () {
        return (
            <div>
                <CraigsApp />
            </div>

        );
    }
});

ReactDOM.render(<App />, document.getElementById('react'));