//const menu = document.getElementsById(weatherCity);

var citySet = "Avignon";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ citySet +"&units=metric&appid=f124eb91dc884aba7307bdedb2e78c99", function(data){
	console.log(data);

	var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	
	var temp = Math.floor(data.main.temp)

	var city = data.name;

	var weather = data.weather[0].main;
	$('.icon').attr('src', icon);
	$('.city').append(city);
	$('.temp').append(temp,"°");
	$('.weather').append(weather);
});
