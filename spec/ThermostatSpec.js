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

});
