function Thermostat() {
  this.temperature = 20;

};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  return this.temperature += 1;
};
