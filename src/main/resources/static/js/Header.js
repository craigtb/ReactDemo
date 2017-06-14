var React = require('react');

var Header = React.createClass({

    getInitialState: function () {
        return { lastName: 'Bridges' };
    },

    render: function () {
        return React.createElement(
            'div',
            { style: { border: 'solid', height: '3em', margin: '0 0 1em 0' } },
            this.props.name
        );
    }
});

module.exports = Header;