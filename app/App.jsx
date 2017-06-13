var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.js');

var App = React.createClass({

    render: function () {
        return (
            <Header name="Neely"/>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('react'));