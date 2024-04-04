const apiKey = api;
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
    var rounded = Math.round(number * 10) / 10;
    var oneDp = rounded.toFixed(1);
    document.querySelector(".temperature").innerHTML = oneDp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png"
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzling.png"
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sunny.png"
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/misty.png"
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/raining.png"
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "images/stormy.png"
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snowing.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }

}


searchButton.addEventListener("click", () => {
  retrieveWeather(searchInput.value);
})


//enable ENTER key to process search

searchInput.addEventListener("keypress", function (v) {
  if (v.key === "Enter") {
    v.preventDefault();
    retrieveWeather(searchInput.value);
  }
});


// const el = document.querySelector(".wrapper");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX/100 + "px";
//   el.style.backgroundPositionY = -e.offsetY/100 + "px";
// });
// </script>