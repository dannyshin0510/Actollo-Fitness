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
	var ref = database.ref("goalStatus");
		ref.on('value', gotData, err);
		function err(err)
		{
			console.log("error!"+err);
		}
		//data pulled from the current day set above^
		function gotData(data)
		{
			var count=0;
			var dataVal = data.val();
			var keys = Object.keys(dataVal);
			var status=data.val()[keys[0]];	
			if (status=="completed" && count===0)
			{
				$("#goalStatus").append("Goal has been achieved");
			}

			$("#goalButton").click(function(){
				if (status=="incompleted"&& count===0)
				{
			 		var newStatus ="completed";
			 		ref.update({'goalStatus': newStatus})
			 	}
			 	count=count+1;
			});
		}
});