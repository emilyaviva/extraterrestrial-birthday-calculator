var React = require('react');
var moment = require('moment');

function isInt(v) {
  return !isNaN(v) && (function(x) {return (x | 0) === x;})(parseFloat(v));
};

var DateForm = React.createClass({
  validateDate: function(arr) {
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];
    if (isInt(year) && isInt(month) && isInt(day)) {
      if (month in [3, 5, 8, 10] && day > 30) return false;
      if (month === 1 && day > 28) {
        var febDate = new Date(year, month, day);
        if (febDate.toString().slice(4,7) !== 'Feb') return false;
      }
      return true;
    } else return false;
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var year = React.findDOMNode(this.refs.year).value.trim();
    var month = React.findDOMNode(this.refs.month).value.trim();
    var day = React.findDOMNode(this.refs.day).value.trim();
    if (!this.validateDate([year, month, day])) this.props.onInvalidDate();
    else this.props.onDateSubmit([year, month, day]);
    return;
  },
  render: function() {
    return (
      <form className="dateForm" onSubmit={this.handleSubmit}>
        <input required type="text" placeholder="Year" ref="year"/>
        <select required ref="month">
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <input required type="text" placeholder="Day" ref="day"/>
        <input type="submit" value="Enter"/>
      </form>
    );
  }
});

module.exports = DateForm;
