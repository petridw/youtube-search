var React = require('react');
var Search = require('./js/search/Search');
var Display = require('./js/videoFeed/VideoFeed');
var youtube = require('./js/services/youtube');

var App = React.createClass({
  getInitialState: function() {
    return {search_data: {items: []}};
  },
  onSearchKey: function(query, location) {
    var query_obj = {};
    query_obj.q = query;

    if (location) {
      query_obj.location = location;
    }

    youtube.search(query_obj, function(data) {
      console.log(data);
      this.setState({search_data: data});
    }.bind(this));
  },
  render: function() {
    return (
      <div id="app">
        <Search handler={this.onSearchKey} />
        <Display videoList={this.state.search_data}/>
      </div>
    );
  }
});

React.render(<App />, document.body);
