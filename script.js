const apiKey = "ae8f1d8587d85ab47f39b83de64700e7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function retrieveWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

    var data = await response.json();

    console.log(data);

    document.querySelector(".location-name").innerHTML = data.name;
    var number = data.main.temp;
    var rounded = Math.round(number * 10) / 10
    var oneDp = rounded.toFixed(1);
    document.querySelector(".temperature").innerHTML = oneDp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png"
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sunny.png"
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/raining.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }

}


searchButton.addEventListener("click", () => {
  retrieveWeather(searchInput.value);
})


//enable ENTER key to process search

searchInput.addEventListener("keypress", function(v) {
  if (v.key === "Enter") {
    v.preventDefault();
    retrieveWeather(searchInput.value);
  }
});

