function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
  this.POWER_SAVING_ON_MAX = 25;
  this.POWER_SAVING_OFF_MAX = 32;
  this.DEFAULT_TMP = 20;
  this.temperature = this.DEFAULT_TMP;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  if (this.isMaximumTemp()){
    return
  }
  this.temperature += 1;
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

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function (){
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemp = function () {
  if(this.isPowerSavingModeOn() === false){
    return this.temperature === this.POWER_SAVING_OFF_MAX;
  }
  return this.temperature === this.POWER_SAVING_ON_MAX;
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TMP;
};
