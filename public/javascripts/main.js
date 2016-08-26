$(document).ready(function(){
  var joke = '';
  $('#magic').on('click', function (e) {
    e.preventDefault();
    getJoke();
  })
});

function getJoke() {
  $.ajax({
    url: 'http://api.icndb.com/jokes/random'
  })
  .done(function (data) {
    joke = data.value.joke;
    $('#joke').html('<h3>' + joke + '</h3>');
    tweetJoke();
  })
};

function tweetJoke() {
  $.ajax({
    url: 'http://localhost:3000',
    method: 'POST',
    data: {joke: joke}
  })
  .done(function (data) {
    console.log('post');
  })
};
