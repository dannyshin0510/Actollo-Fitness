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
		
		var mondayWork= ["Russian Twists: x30", "Leg raises x30", "Plank 2mins", "Mountain Climber 1min", "Squats x20"];
		var tuesdayWork= ["Dumbell Flies x20", "Barbell Shoulder Raises x30", "Barbell Rows x20"];
		var wednesdayWork= ["Congrats, Athlete! It's REST Day!"];
		var thursdayWork= ["Pistol Squats x40","Wide Lunges x20", "Vertical Jumps x10", "Squats (Heavy) x10"];
		var fridayWork= ["Pull Ups x20", "Chin holds 1min", "Neutral Hangs 2mins", "Muscle Ups x10"];
		var saturdayWork= ["Pushups x40", "Crunches: x30", "Starjumps x30", "Leg Raises x30", "Jumprope x200"];
		var sundayWork= ["Congrats, Athlete! It's REST day!"];
		function displayToday()
		{
			document.getElementById("dayWeek").innerHTML="Today is: "+dayName[dateToday.getDay()];
		}
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
				for (var i=0; i<mondayWork.length;i++)
				{
					document.getElementById("work").innerHTML+= "<li>"+mondayWork[i]+"</li>";
				}
				
			else
				document.getElementById("work").innerHTML="Let's go for a run!";
		}
		function tuesday ()
		{
			if (temperature<10)
				for (var i=0; i<tuesdayWork.length;i++)
				{
					document.getElementById("work").innerHTML+= "<li>"+tuesdayWork[i]+"</li>";
				}
				
			else
				document.getElementById("work").innerHTML="Let's go for a run!";
		}
		function wednesday ()
		{
			if (temperature<10)
				for (var i=0; i<wednesdayWork.length;i++)
				{
					document.getElementById("work").innerHTML+= "<li>"+wednesdayWork[i]+"</li>";
				}
				
			else
				document.getElementById("work").innerHTML="Let's go for a run!";
		}
		function thursday ()
		{
			if (temperature<10)
				for (var i=0; i<thursdayWork.length;i++)
				{
					document.getElementById("work").innerHTML+= "<li>"+thursdayWork[i]+"</li>";
				}
				
			else
				document.getElementById("work").innerHTML="Let's go for a run!";
		}
		function friday ()
		{
			if (temperature<10)
				for (var i=0; i<fridayWork.length;i++)
				{
					document.getElementById("work").innerHTML+= "<li>"+fridayWork[i]+"</li>";
				}
				
			else
				document.getElementById("work").innerHTML="Let's go for a run!";
		}
		function saturday ()
		{
			if (temperature<10)
				for (var i=0; i<saturdayWork.length;i++)
				{
					document.getElementById("work").innerHTML+= "<li>"+saturdayWork[i]+"</li>";
				}
				
			else
				document.getElementById("work").innerHTML="Let's go for a run!";
		}
		function sunday ()
		{
			if (temperature<10)
				for (var i=0; i<sundayWork.length;i++)
				{
					document.getElementById("work").innerHTML+= "<li>"+sundayWork[i]+"</li>";
				}
				
			else
				document.getElementById("work").innerHTML="Let's go for a run!";
		}
	}
); 


