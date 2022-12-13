var supportedAreaCodes = [
  {
    areacode: "206",
    timezone: "GMT+8",
    location: "Seattle, WA",
  },
  {
    areacode: "919",
    timezone: "GMT+5",
    location: "Raleigh, NC",
  },
  {
    areacode: "607",
    timezone: "GMT+5",
    location: "Ithaca, NY",
  },
];

var globalData = {};
// const options = {
//     method: 'GET',
//     headers: {accept: 'application/json', Authorization: '2067826593'}
//   };

// var APIKey = "42d8743ba62a4bad80b362d999437d44";

// function getNumber(number) {

//     var URL =
//       "https://scrape.abstractapi.com/v1/?api_key=" +
//       APIKey +
//       "&url=https://news.ycombinator.com";

//     fetch(baseURL).then(function (res) {
//       return res.json().then(function (data) {});
//     });
//   }

// const options = {
//     method: 'GET',
//     headers: {accept: 'application/json', Authorization: '2064126593'}
//   };

//   fetch('https://api.yelp.com/v3/businesses/search/phone', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

var searchForm = document.getElementById("myform");
var phoneInput = document.getElementById("myform_phone");
searchForm.addEventListener("submit", handlePhoneSearch);

function handlePhoneSearch(event) {
  console.log(" form submitted, in function handlePhoneSearch");
  if (!phoneInput.value) {
    return;
  }
  event.preventDefault();
  var phoneNum = phoneInput.value.trim();
  console.log("phoneNum = ", phoneNum);

  // call any timzone / area code function
  analyseTimeZone(phoneNum);
  // now call any validator function
  phoneInput.value = "";
}

function analyseTimeZone(phone) {
  console.log("in analyseTimeZone");
  console.log("phone number is = ", phone);
  var areaCode = phone.split("-")[0];
  console.log("area code  is = ", areaCode);

  for (var i = 0; i < supportedAreaCodes.length; i++) {
    if (areaCode === supportedAreaCodes[i].areacode) {
      console.log(
        "Found the location!! location : ",
        supportedAreaCodes[i].location
      );
    }
  }

  //Phone number validation

  //when click 'submit'
  document.getElementById("myform").addEventListener("submit", validateForm);

  //validate the number formate
  function validatePhoneNumber(input_str) {
    var re = /^[\+1]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

    //return the formate
    return re.test(input_str);
  }
  //show the error or success
  function validateForm(event) {
    var phone = document.getElementById("myform_phone").value;
    if (!validatePhoneNumber(phone)) {
      document.getElementById("phone_error").classList.remove("hidden");
    } else {
      document.getElementById("phone_error").classList.add("hidden");
      alert("validation success");
    }
    resultEl.append("");
    event.preventDefault();
  }
  $.getJSON(
    `https://phonevalidation.abstractapi.com/v1/?api_key=0879c0a3573c4b6399e5f11245ecee00&phone=${phone}`,
    function (data) {
      console.log("display content");
      console.log(data);
      if (data.valid == true) {
        showResult(data);
      }
    }
  );
  var showResult = function (data) {
    const valid = document.createElement("p");
    const country = document.createElement("p");
    const location = document.createElement("p");
    const carrier = document.createElement("p");
    const phone = document.createElement("p");
    const type = document.createElement("p");

    const node1 = document.createTextNode("Valid: " + data.valid);
    const node2 = document.createTextNode("Country: " + data.country.name);
    const node3 = document.createTextNode("Location: " + data.location);
    const node4 = document.createTextNode("Carrier: " + data.carrier);
    const node5 = document.createTextNode(data.phone);
    const node6 = document.createTextNode("Type: " + data.type);

    valid.appendChild(node1);
    country.appendChild(node2);
    location.appendChild(node3);
    carrier.appendChild(node4);
    phone.appendChild(node5);
    type.appendChild(node6);

    const resultEl = document.getElementById("result-container");

    resultEl.appendChild(valid);
    resultEl.appendChild(country);
    resultEl.appendChild(location);
    resultEl.appendChild(carrier);
    resultEl.appendChild(type);
  };

  // ADDED THE BUSINESS LOOKUP API

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.yelp.com/v3/businesses/search/phone?phone=${phone}`,
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer fzLlTXCEtAlfCdWydnbbZPvAobg7iZu9pGznSTrYIqaA26tPWchnGr-dp6mw0m6xk_z63JO-UWSAN397azmzXybDUYILszG3IvafgDIQWfTAtJuR9996B4dIJCWVY3Yx",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    showBusinessResult(response.businesses);
  });

  var showBusinessResult = function (data) {
    console.log(data);
    const name = document.createElement("p");
    const imageUrl = document.createElement("p");
    const url = document.createElement("p");
    const displayAddress = document.createElement("p");
    const rating = document.createElement("p");

    const node7 = document.createTextNode("Name: " + data[0].name);
    // const node8 = document.createTextNode(data[0].image_url);
    const node9 = document.createTextNode("Url: " + data[0].url);
    const node10 = document.createTextNode(
      "Address: " + data[0].location.display_address
    );
    const node11 = document.createTextNode("Rating: " + data[0].rating);

    name.appendChild(node7);
    // imageUrl.appendChild(node8);
    url.appendChild(node9);
    displayAddress.appendChild(node10);
    rating.appendChild(node11);

    const resultEl2 = document.getElementById("business-container");

    resultEl2.appendChild(name);
    resultEl2.appendChild(imageUrl);
    resultEl2.appendChild(url);
    resultEl2.appendChild(displayAddress);
    resultEl2.appendChild(rating);
  };
}
