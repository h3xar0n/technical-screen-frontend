"use strict";

function Weather(cityName, description) {
  this.cityName = cityName;
  this.description = description;
  this._description = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this.temperature;
  },
  
})
