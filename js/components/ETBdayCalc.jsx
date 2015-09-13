var React = require('react');
var moment = require('moment');
var DateForm = require('./DateForm.jsx');
var OutputList = require('./OutputList.jsx');
var YouEntered = require('./YouEntered.jsx');

var ETBdayCalc = React.createClass({
  getInitialState: function() {
    return {data: ''};
  },
  handleDateSubmit: function(date) {
    var inputDate = moment(date).format('dddd, MMMM D, YYYY');
    this.setState({data: inputDate});
  },
  handleInvalidDate: function() {
    this.setState({data: 'an invalid date'});
  },
  render: function() {
    return (
      <div className="calc-app">
        <h1>The Extraterrestrial Birthday Calculator</h1>
        <DateForm onDateSubmit={this.handleDateSubmit} onInvalidDate={this.handleInvalidDate}/>
        <YouEntered data={this.state.data}/>
        <OutputList/>
      </div>
    );
  }
});

module.exports = ETBdayCalc;
