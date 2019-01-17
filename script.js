var config = {
    apiKey: "AIzaSyB4buf1HovVJWmzvKIcDvMnh5dfrifDc-k",
    authDomain: "workout-1212e.firebaseapp.com",
    databaseURL: "https://workout-1212e.firebaseio.com",
    projectId: "workout-1212e",
    storageBucket: "workout-1212e.appspot.com",
    messagingSenderId: "466304417497"
  };

  firebase.initializeApp(config);
  database = firebase.database();

$(document).ready(function(){


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
		// shows today's status
		displayToday();
		//changing the reference to current day's regimen
		var ref = database.ref(dayName[dateToday.getDay()]);
		ref.on('value', gotData, err);
		function err(err)
		{
			console.log("error!"+err);
		}





		//data pulled from the current day set above^
		function gotData(data)
		{
			console.log(data.val());
			var dataVal = data.val();
			var keys = Object.keys(dataVal);
			displayRegimen();
		
				function displayRegimen ()
				{
					if (temperature<10)
					{
						var exercise=data.val()[keys[0]]["workout"];
						for (var i=0; i<data.val()[keys[0]]["workout"].length;i++)
						{
							document.getElementById("work").innerHTML+= "<li>"+data.val()[keys[0]]["workout"][i]+"</li>";
						}
					}	
					else
						document.getElementById("work").innerHTML="Let's go for a run!";
				}
				console.log(data.val());
				$('#words').append(data.val()[keys[0]]["goal"]);  
		};
		function displayToday()
		{

			document.getElementById("dayWeek").innerHTML="Today is: "+dayName[dateToday.getDay()];
		}
	}
); 

});
//1. makes new elements
// var ref = database.ref('Tuesday');
//  var newWorkout ={
//    workout:["Cable Crunches", "Spartan Thrusts", "Battle Ropes"],
//    goal:"To complete 30 high knees in 15 seconds"
//  }
//  ref.push(newWorkout);

// 2. adds new elements to the firebase portal when button clicked
// $(document).ready(function(){
//   $("#goalButton").click(function(){
//         console.log("HELLO");
//         var ref = database.ref('Just added!');
//         var Monday ={
//         workout:["Jumping Jacks", "High knees", "Should press"],
//         goal:"To complete 30 high knees in 15 seconds"
//       }
//     ref.push(Monday);
//   }); 
// }); 

// for when successfully completed the goal