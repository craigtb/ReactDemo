var React = require('react');

var Content = React.createClass({

    getInitialState: function () {
        return { lastName: 'Bridges' };
    },

    render: function () {
        return <div style={{border: 'solid'}}>{this.props.name}</div>;
    }
});

module.exports = Content;