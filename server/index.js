const express = require ('express');
let bodyParser = require('body-parser');
const MongoClient = require ('mongodb').MongoClient;
let db;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

let url = 'mongodb://localhost:27017/waterdeep';
MongoClient.connect(url, function(err, database) {
  db = database;
  console.log("Connected correctly to server.");
});


// Headers that allow me to post, get, and patch data from the client
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, HEAD, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/getStoryBoard", function(req, res) {
	db.collection("chapters").find().toArray(function(err, result) {
		if (err){
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

app.post("/login", function(req, res) {
  db.collection("users").find({"username": req.body.username}).toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      console.log(result);
      result.length === 1 ? res.send(result) : res.send(false);
    }
  });
});

app.get("/getSideStory", function(req, res) {
  db.collection("sideStory").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/dates", function(req, res) {
  db.collection("dates").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getFactionMissions", function(req, res) {
  db.collection("factionStories").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/updateStoryBoard", function (req) {
  db.collection("chapters").save(req.body)
});

app.post("/updateFactionStory", function (req) {
  db.collection("factionStories").save(req.body)
});

app.post("/updateSideStory", function (req) {
  db.collection("sideStory").save(req.body)
});
app.post("/updatePlayer", function (req, res) {
  db.collection("players").save(req.body)
    .then(() => {
      db.collection("players").find().toArray(function(err, result) {
        if (err){
          res.send(err);
        } else {
          res.send(result);
        }
      });
    });
});

app.get("/getPlayers", function(req, res) {
  db.collection("players").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getEncounters", function(req, res) {
  db.collection("encounters").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen('3001', function(){
  console.log('running on 3001...');
});
