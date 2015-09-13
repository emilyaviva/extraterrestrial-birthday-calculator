var React = require('react');
var DateForm = require('./DateForm.jsx');

var ETBdayCalc = React.createClass({
  handleDateSubmit: function(date) {
    alert(date);
  },
  handleInvalidDate: function(date) {
    alert('That is not a valid date');
  },
  render: function() {
    return (
      <div className="calc-app">
        <h1>The Extraterrestrial Birthday Calculator</h1>
        <DateForm onDateSubmit={this.handleDateSubmit} />
      </div>
    );
  }
});

module.exports = ETBdayCalc;
