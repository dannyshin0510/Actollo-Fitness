$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&APPID=80b49077f2e7b925d8b3f69b5594b9bd", function(data)
	{
		console.log(data);
		var pic= "https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
		$('#pic').attr('src',pic);
		//Math.floor() is a function that only shows to the units of a floating value.
		var temperature=Math.floor(data.main.temp);
		console.log(temperature);
		//practice using the raw js  code for the same thing that jquery is used for...
		//  $('#temperature').append(temperature);
		document.getElementById("temperature").innerHTML="Today's temperature is: "+temperature+" celsius";
	}
); 


