var numberEl = document.getElementById();
var searchEl = document.getElementById();
var APIKey = "42d8743ba62a4bad80b362d999437d44";

function getNumber(number) {
    
    var URL =
      "https://scrape.abstractapi.com/v1/?api_key=" +
      APIKey +
      "&url=https://news.ycombinator.com";
  
    fetch(baseURL).then(function (res) {
      return res.json().then(function (data) {});
    });
  }


const options = {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: '2064126593'}
  };
  
  fetch('https://api.yelp.com/v3/businesses/search/phone', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));