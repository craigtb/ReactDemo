var React = require('react');
var ReactDOM = require('react-dom');
var CraigsApp = require('./CraigsApp.js');
var Content = require('./Content.js');

var App = React.createClass({

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(CraigsApp, null)
        );
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('react'));