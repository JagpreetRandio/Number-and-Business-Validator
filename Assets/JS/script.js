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



//Phone number validation

//when click 'submit'
document.getElementById('myform').addEventListener('submit', validateForm);

//validate the number formate
function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  //return the formate
  return re.test(input_str);
}
//show the error or success
function validateForm(event) {
  var phone = document.getElementById('myform_phone').value;
  if (!validatePhoneNumber(phone)) {
      document.getElementById('phone_error').classList.remove('hidden');
  } else {
      document.getElementById('phone_error').classList.add('hidden');
      alert("validation success")
  }
  event.preventDefault();
}
