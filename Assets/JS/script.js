var supportedAreaCodes = [
    {
        areacode:  "206",
        timezone: "GMT+8",
        location: "Seattle, WA"
    },
    {
        areacode:  "919",
        timezone: "GMT+5",
        location: "Raleigh, NC"
    },
    {
        areacode:  "607",
        timezone: "GMT+5",
        location: "Ithaca, NY"
    }
];


const options = {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: '2067826593'}
  };
  
//   fetch('https://api.yelp.com/v3/businesses/search/phone', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

   var searchForm = document.getElementById ("myform");
   var phoneInput = document.getElementById("myform_phone")
   searchForm.addEventListener ('submit', handlePhoneSearch);

   function handlePhoneSearch(event) {
    console.log ( " form submitted, in function handlePhoneSearch")
    if (!phoneInput.value ){
        return;
    }
    event.preventDefault();
    var phoneNum  = phoneInput.value.trim();
    console.log ( "phoneNum = ", phoneNum);

    // call any timzone / area code function
    analyseTimeZone(phoneNum);
    // now call any validator function
    phoneInput.value = '';
}

function analyseTimeZone(phone) {
    console.log("in analyseTimeZone")
    console.log("phone number is = ", phone);
    var areaCode = phone.split('-')[0];
    console.log("area code  is = ", areaCode);

    for (var i=0; i < supportedAreaCodes.length; i++){
        if (areaCode === supportedAreaCodes[i].areacode){
            console.log("Found the location!! location : ", supportedAreaCodes[i].location)
        }
    }

}