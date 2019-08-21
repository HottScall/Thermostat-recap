'use strict';

describe('Thermostat', function() {

var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function (){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase the temperature by + 1', function (){
    thermostat.increase();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease the temperature by -1', function () {
    thermostat.decrease();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temp of 10 degrees', function (){
    for (var i = 0; i < 11; i++) {
    thermostat.decrease();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('is automatically turned onto Power Saving Mode', function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch Power Saving Mode off', function (){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch Power Saving Mode back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

describe ('when power saving mode is on', function (){
  it('has a minimum temperature of 25 degress', function (){
    for (var i = 0; i < 6; i++  ) {
      thermostat.increase();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  it('has a maximum temperature of 32 degrees', function(){
    thermostat.switchPowerSavingModeOff();
    for (var i  = 0; i < 13; i++){
      thermostat.increase();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('can be reset to the default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increase();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});

describe('displaying useage levels', function(){
  describe('when the temperature is below 18', function(){
    it('is considered low useage', function(){
      (for i = 0; i < 3; i++){
        thermostat.decrease();
      }
      expect(thermostat.energyUseage()).toEqual("Low Useage")
    });
  });
});


});
