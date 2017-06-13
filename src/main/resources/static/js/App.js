var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.js');

var App = React.createClass({

    render: function () {
        return React.createElement(Header, { name: 'Neely' });
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('react'));