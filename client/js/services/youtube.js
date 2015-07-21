var youtube = {};
var api_key = "AIzaSyANYOIdRMZYV5FIIc6eOLMXAaF6_M8mV0o";

youtube.search = function(query, callback) {
  console.log(query);
  var endpoint = "https://www.googleapis.com/youtube/v3/search";

  var params = $.param({
    part: 'snippet',
    q: query,
    key: api_key
  });

  $.getJSON(endpoint + '?' +  params, function(data) {
    callback(data);
  });
};

module.exports = youtube;
