
// const fs=require('fs');
// var data=fs.readFileSync('words.json');
// var words=JSON.parse(data);
// console.log(words);


// var word="hello";
// var num=23;

// words["bdf"] = 12;
// var data=JSON.stringify(words);
// fs.writeFile('words.json', data, finished);

// function finished (err)
// {
// 	console.log(words);
// }
// console.log (words["pink"]);

var words = {
  "rainbow": 5,
  "unicorn": 3,
  "doom": -3,
  "gloom": -2,
  "chicken":23
}


console.log('server is starting');

var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening() {
  console.log("listening. . . ");
}

app.use(express.static('website'));

app.get('/add/:word/:score?', addWord);


// CODE TO GET BY CORS SECURITY WALL
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// 


function addWord(request, response) {
  var data = request.params;
  var word = data.word;
  var score = Number(data.score);
  var reply;
  if (!score) {
    reply = {
      msg: "Score is required."
    }
  } else {
    words[word] = score;
    reply = {
      msg: "Thank you for your word."
    }
  }

  response.send(reply);
}

app.get('/all', sendAll);

function sendAll(request, response) {
  response.send(words);
}

// app.get('/search/:word/', searchWord);

// function searchWord(request, response) {
//   var word = request.params.word;
//   var reply;
//   if (words[word]) {
//     reply = {
//       status: "found",
//       word: word,
//       score: words[word]
//     }
//   } else {
//     reply = {
//       status: "not found",
//       word: word
//     }
//   }
//   response.send(reply);
// }
