const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=2fe92bb17eb74e288fd95215240212&q=${cityName}&aqi=yes`
  );

  // parse the response into json!
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;

  // getData will return a promise, so we need to keep await
  const result = await getData(value);

  // clear previous content
  cityName.innerHTML = ""
  cityTime.innerHTML = ""
  cityTemp.innerHTML = ""

  // create and style name labels dynamically
  const locationLabel = document.createElement("span"); // create a span element
  locationLabel.classList.add("label"); // give className to it
  locationLabel.innerText = "Location"; // add text

  const timeLabel = document.createElement("span");
  timeLabel.classList.add("label");
  timeLabel.innerText = "Current-Time";

  const tempLabel = document.createElement("span");
  tempLabel.classList.add("label");
  tempLabel.innerText = "Current Temperature";

  // append labels and values to their respective elements
  cityName.appendChild(locationLabel);
  cityName.append(
    `${result.location.name}, ${result.location.region}, ${result.location.country}`
  );

  cityTime.appendChild(timeLabel);
  cityTime.append(`${result.location.localtime.split(" ")[1]}`);

  cityTemp.appendChild(tempLabel);
  cityTemp.append(`${result.current.temp_c}°C`);

  console.log(result);
});