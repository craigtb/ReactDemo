var React = require('react');

var Header = React.createClass({

    getInitialState: function () {
        return { lastName: 'Bridges' };
    },

    render: function () {
        return <div style={{border: 'solid'}}>{this.props.name} {this.state.lastName}</div>;
    }
});

module.exports = Header;