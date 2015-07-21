var React = require('react');

var Search = React.createClass({
  handleSubmit: function() {
    var query;
    if ($('#search-input').val() !== '') {
      query = $('#search-input').val();
      $('#search-input').val('');
      this.props.handler(query);
    }
  },
  handleKeyDown: function(evt) {
    if (evt.keyCode === 13) {
      this.handleSubmit();
    }
  },
  render: function() {
    return (
      <div id="search">
        <input type="text" id="search-input" onKeyDown={this.handleKeyDown}/>
        <button type="submit" onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
});

module.exports = Search;
