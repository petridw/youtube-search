var React = require('react');

var Search = React.createClass({
  handleSubmit: function() {
    var query, location;
    if ($('#search-input').val() !== '') {

      query = $('#search-query').val();
      location = $('#search-location').val();
      $('#search-query').val('');
      $('#search-location').val('');

      this.props.handler(query, location);
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
        <input type="text" id="search-query" placeholder="Query" onKeyDown={this.handleKeyDown}/>
        <input type="text" id="search-location" placeholder="location" onKeyDown={this.handleKeyDown}/>
        <button type="submit" onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
});

module.exports = Search;
