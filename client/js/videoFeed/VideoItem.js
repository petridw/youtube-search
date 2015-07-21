var React = require('react');

var VideoItem = React.createClass({
  render: function() {
    return (
      <div className="video">
        <img src={this.props.data.snippet.thumbnails.high.url} />
        {this.props.data.snippet.title}
      </div>
    );
  }
});

module.exports = VideoItem;
