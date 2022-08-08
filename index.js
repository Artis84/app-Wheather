//const menu = document.getElementsById(weatherCity);

var citySet = "Avignon";

$.getJSON("//api.openweathermap.org/data/2.5/weather?q="+ citySet +"&units=metric&appid=143454aa39bbe3442a890cdbf3f9db36", function(data){
	console.log(data);

	var icon = "//openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	
	var temp = Math.floor(data.main.temp)

	var city = data.name;

	var weather = data.weather[0].main;
	$('.icon').attr('src', icon);
	$('.city').append(city);
	$('.temp').append(temp,"°");
	$('.weather').append(weather);
});
