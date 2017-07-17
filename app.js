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
  var url = 'api.openweathermap.org/data/2.5/weather?q=' + cityName;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText);
    } else if (http.readyState == XMLHttpRequest.DONE) {
      alert('Something went wrong!');
    }
  };
}
