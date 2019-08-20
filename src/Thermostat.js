function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;

};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  return this.temperature += 1;
};

Thermostat.prototype.decrease = function () {
  if (this.isMinimumTemp()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemp = function () {
  return this.temperature === this.MINIMUM_TEMP;
};
