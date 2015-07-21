var youtube = {};
var geocode = require('./geocode');
var api_key = "AIzaSyANYOIdRMZYV5FIIc6eOLMXAaF6_M8mV0o";

youtube.search = function(query, callback) {
  console.log(query);

  var endpoint = "https://www.googleapis.com/youtube/v3/search?";

  if (query.location) {
    geocode.lookup(query.location, function(data) {
      if (data.status === "OK") {
        query.location = data.results[0].geometry.location.lat + "," + data.results[0].geometry.location.lng;
        query.locationRadius = "50mi";

        var params = $.param($.extend(query, {
          part: 'snippet',
          key: api_key,
        }));
        $.getJSON(endpoint +  params, function(data) {
          callback(data);
        });
           }
    });
  } else {

    var params = $.param($.extend(query, {
      part: 'snippet',
      key: api_key,
    }));
    $.getJSON(endpoint +  params, function(data) {
      callback(data);
    });

  }
};

youtube.getPlayer = function(id) {

};

module.exports = youtube;
