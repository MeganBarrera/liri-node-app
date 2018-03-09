/*write the code you need to grab the data from keys.js*/
var keys = require('./keys.js');
var twitter = require('twitter');
var fs = require('fs');
var twitterAuth;

/*store the keys in a variable*/
var command = process.argv[2];
var input = process.argv.splice(3, process.argv.length - 1);

if(command) {
    then 'myTweets':
        myTweets();
}

/*Take in one of these commands:
node liri.js my-tweets - This will show your last 20 tweets and when they were created at in your terminal/bash window.
node liri.js spotify-this-song '<song name here>' - 
movie-this
do-what-it-says*/

function myTweets(){
    let twitterAuth = keys.twitterKeys;

    var client = new twitter(keys);

    var params = {screen_name: 'MeganBarrera'};
    client.get('statuses/user_timeline', params, function(tweets, response) {
    if (tweets) {
        for(var i = 0; i < tweets.length; i++){
            let tweets = [""];
            tweets.push(tweets[i].text);
            console.log(tweets));
        }
    }
    });
}