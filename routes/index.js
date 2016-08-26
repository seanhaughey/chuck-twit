var express = require('express');
var router = express.Router();
var Twit = require('twit');

var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chuck Norris Beats Twitter' });
});

router.post('/', function (req, res, next) {
  console.log(req.body.joke);
  twitter.post('statuses/update', { status: req.body.joke }, function(err,    data, response) {
    console.log(data)
  })
})

module.exports = router;
