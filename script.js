function completed()
{
 $("#goalStatus").append("Goal has been achieved");
}

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&APPID=80b49077f2e7b925d8b3f69b5594b9bd", function(data)
	{
		var pic= "https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
		$('#pic').attr('src',pic);
		//Math.floor() is a function that only shows to the units of a floating value.
		temperature=Math.floor(data.main.temp);
		//practice using the raw js  code for the same thing that jquery is used for...
		//  $('#temperature').append(temperature);
		document.getElementById("temperature").innerHTML="Today's temperature is: "+temperature+ ' &#8451;';

		var dateToday = new Date();
		var dayName = new Array(7);
		dayName[0] =  "Sunday";
		dayName[1] = "Monday";
		dayName[2] = "Tuesday";
		dayName[3] = "Wednesday";
		dayName[4] = "Thursday";
		dayName[5] = "Friday";
		dayName[6] = "Saturday";

		//console.log(dayName[dateToday.getDay()]);
		displayToday();

		
		$.getJSON("https://api.myjson.com/bins/1ceqmc", function(data)
		{	
				var numberTest=data;
				console.log(data["mondayWork"][0]);

			if (dayName[dateToday.getDay()]=="Monday")
				monday();
			else if (dayName[dateToday.getDay()]=="Tuesday")
				tuesday();
			else if (dayName[dateToday.getDay()]=="Wednesday")
				wednesday();
			else if (dayName[dateToday.getDay()]=="Thursday")
				thursday();
			else if (dayName[dateToday.getDay()]=="Friday")
				friday();
			else if (dayName[dateToday.getDay()]=="Saturday")
				saturday();
			else 
				sunday();
			function monday ()
			{
				
				if (temperature<10)
					for (var i=0; i<data["mondayWork"].length;i++)
					{
						document.getElementById("work").innerHTML+= "<li>"+data["mondayWork"][i]+"</li>";
					}
					
				else
					document.getElementById("work").innerHTML="Let's go for a run!";
			}
			function tuesday ()
			{
				if (temperature<10)
					for (var i=0; i<data["tuesdayWork"].length;i++)
					{
						document.getElementById("work").innerHTML+= "<li>"+data["tuesdayWork"][i]+"</li>";
					}
					
				else
					document.getElementById("work").innerHTML="Let's go for a run!";
			}
			function wednesday ()
			{
				if (temperature<10)
					for (var i=0; i<data["wednesdayWork"].length;i++)
					{
						document.getElementById("work").innerHTML+= "<li>"+data["wednesdayWork"][i]+"</li>";
					}
					
				else
					document.getElementById("work").innerHTML="Let's go for a run!";
			}
			function thursday ()
			{
				if (temperature<10)
					for (var i=0; i<data["thursdayWork"].length;i++)
					{
						document.getElementById("work").innerHTML+= "<li>"+data["thursdayWork"][i]+"</li>";
					}
					
				else
					document.getElementById("work").innerHTML="Let's go for a run!";
			}
			function friday ()
			{
				if (temperature<10)
					for (var i=0; i<data["fridayWork"].length;i++)
					{
						document.getElementById("work").innerHTML+= "<li>"+data["fridayWork"][i]+"</li>";
					}
					
				else
					document.getElementById("work").innerHTML="Let's go for a run!";
			}
			function saturday ()
			{
				if (temperature<10)
					for (var i=0; i<data["saturdayWork"].length;i++)
					{
						document.getElementById("work").innerHTML+= "<li>"+data["saturdayWork"][i]+"</li>";
					}
					
				else
					document.getElementById("work").innerHTML="Let's go for a run!";
			}
			function sunday ()
			{
				if (temperature<10)
					for (var i=0; i<data["sundayWork"].length;i++)
					{
						document.getElementById("work").innerHTML+= "<li>"+data["sundayWork"][i]+"</li>";
					}
					
				else
					document.getElementById("work").innerHTML="Let's go for a run!";
			}
		});

		function displayToday()
		{
			document.getElementById("dayWeek").innerHTML="Today is: "+dayName[dateToday.getDay()];
		}
		
	}
); 

