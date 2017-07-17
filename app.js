"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  var cityName = searchCity.value;
  // Check cityName isn't blank, even with whitespace
  if (cityName.trim().length == 0) {
    alert('Please enter a city name');
  }
  var http = new XMLHttpRequest();
  // API key hidden in api.js, see README
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
      weatherData.temperature = data.main.temp;
      // Temporarily log until showing on UI
      console.log(weatherData);
    } else if (http.readyState == XMLHttpRequest.DONE) {
      alert('Something went wrong!');
    }
  };
  http.send();
}
