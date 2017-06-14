var React = require('react');

var Header = require('./Header.js');
var Content = require('./Content.js');

var CraigsApp = React.createClass({



    render: function () {
        return (<div>
          <Header name="Header"/>
            <Content name="Body"/>
        </div>);
    }
});

module.exports = CraigsApp;