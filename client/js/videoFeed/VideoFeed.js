var React = require('react');
var VideoItem = require('./VideoItem');

var VideoFeed = React.createClass({
  render: function() {
    var videoItems = this.props.videoList.items.map(function(video, index) {
      return <VideoItem data={video} key={index} />;
    });
    return (
      <div id="video-feed">
        {videoItems}
      </div>
    );
  }
});

module.exports = VideoFeed;
