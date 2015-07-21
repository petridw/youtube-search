var React = require('react');
var youtube = require('./../services/youtube');

var VideoItem = React.createClass({
  render: function() {
    var url = "http://www.youtube.com/embed/" + this.props.data.id.videoId;
    return <iframe className="ytplayer" type="text/html" width="640" height="390" src={url} frameBorder="0"/>;
  }
});

module.exports = VideoItem;
