$(document).ready(function(){
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
    var joke = data.value.joke;
    $('#joke').html(joke);
    tweetJoke();
  })
};

function tweetJoke() {
  $.ajax({
    url: 'http://localhost:3000',
    method: 'POST',
    data: {joke: $('#joke').text()}
  })
  .done(function (data) {
    console.log('post');
  })
};
