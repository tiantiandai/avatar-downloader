var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "tiantiandai";
var GITHUB_TOKEN = "b99774fb767ee26059e70186192e5aa10760e4e0";

function getRepoContributors(repoOwner, repoName, cb) {
    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    var requestOptions = {
      url: requestURL,
      headers: {"User-Agent": "tiantiandai"}
    };
    request(requestOptions, function(err, response, body) {
        if (err) { throw err; }
        cb(err, (JSON.parse(body)));
    });
}

getRepoContributors("jquery", "jquery", function(err, result) {

  result.forEach(function(element) {
    console.log(element["avatar_url"]);
});
});