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


});
