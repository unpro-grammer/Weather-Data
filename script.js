const apiKey = "ae8f1d8587d85ab47f39b83de64700e7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function retrieveWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".location-name").innerHTML = data.name;
  var number = data.main.temp;
  var rounded = Math.round(number * 10) / 10
  var oneDp = rounded.toFixed(1);
  document.querySelector(".temperature").innerHTML = oneDp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
}
retrieveWeather()