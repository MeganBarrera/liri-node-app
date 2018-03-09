console.log('twitter');

var twitterKeys = {
  consumer_key: 'x6u1bfWqw5dgZmtpdJcV0XgjC',
  consumer_secret: '	6QwqX5D9a11HcRInw8kqBzFOTeLPUUSnzsIxyanyoc4mixn5Nr',
  access_token_key: '930584330195361792-KKKWGIKWkKzrKiQ1FHcHDtqy46AMN3a',
  access_token_secret: '	3HjUiRNOLwvKGqwQWlUPDODqGDXYHoiLXIj5VLJUTNBMD',
}

module.exports = twitterKeys;


var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

