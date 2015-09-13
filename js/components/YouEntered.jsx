var React = require('react');

var YouEntered = React.createClass({
  render: function() {
    return (
      <h4>You entered {this.props.data}</h4>
    );
  }
});

module.exports = YouEntered;
