$(document).ready(function(){
  var t = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function(){
    t.increase();
    updateTemperature();
  })

  $('#temp-down').on('click', function(){
    t.decrease();
    updateTemperature();
  })

  $('#reset').on('click', function(){
    t.resetTemperature();
    updateTemperature();
  })

  $('#psm-on').on('click', function(){
    t.switchPowerSavingModeOn();
    $('#power-saver').text('ON')
    updateTemperature();
  })

  $('#psm-off').on('click', function(){
    t.switchPowerSavingModeOff();
    $('#power-saver').text('OFF')
    updateTemperature();
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + tokens + units, function(data){
      $('#current-temperature').text(data.main.temp)
    })
  }

  displayWeather('London');
    $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })


  function updateTemperature(){
    $('#temperature').text(t.temperature);
    $('#temperature').attr('class', t.energyUsage());
  };
});
