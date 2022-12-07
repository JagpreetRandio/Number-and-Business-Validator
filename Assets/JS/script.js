const options = {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: '2064126593'}
  };
  
  fetch('https://api.yelp.com/v3/businesses/search/phone', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));