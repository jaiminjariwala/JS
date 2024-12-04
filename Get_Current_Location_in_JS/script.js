const button = document.getElementById("get-location-button");

async function getData(latitude, longitude) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=2fe92bb17eb74e288fd95215240212&q=${latitude},${longitude}&aqi=yes`
  );

  return promise.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function failedToGetLocation() {
  console.log("There's some issue in getting the location!");
}

// fetching a location is an async task so here again we need to use... PROMISES!
button.addEventListener("click", () => {
  // there exist a navigator object, available by default in js to get users location
  /*
        There are 2 callbacks in getCurrentPosition function:
        1. We got succeded to get the users location (SUCCESS CALLBACK)
        2. We came across an error in fetching the users current location! (ERROR CALLBACK)
    */
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
});
