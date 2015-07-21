var geocode = {};
var api_key = "AIzaSyANYOIdRMZYV5FIIc6eOLMXAaF6_M8mV0o";

geocode.lookup = function(address, callback) {
  var endpoint = "https://maps.googleapis.com/maps/api/geocode/json?";

  var params = $.param({
    key: api_key,
    address: address
  });

  console.log('getting at ' + endpoint + params);
  $.getJSON(endpoint + params, function(data) {
    console.log(data);
    callback(data);
  });
};


module.exports = geocode;
