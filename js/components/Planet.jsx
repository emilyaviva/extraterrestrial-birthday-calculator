var React = require('react');

var Planet = React.createClass({
  render: function() {
    return (
      <tr className="planet">
        <td>{this.props.name}</td>
        <td>More data here</td>
      </tr>
    );
  }
});

module.exports = Planet;
