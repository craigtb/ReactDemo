var React = require('react');

var Header = React.createClass({

    getInitialState: function () {
        return { lastName: 'Bridges' };
    },

    render: function () {
        return <div style={{border: 'solid', height: '3em', margin: '0 0 1em 0'}}>{this.props.name}</div>;
    }
});

module.exports = Header;