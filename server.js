//load the express package and create our app
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user1:<password>@cluster0-r2toa.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

//set the port based on environment (more on environments later)
var port = PORT;

//send our index.html file to the user for the home page
app.get('/', function(req,res){
    res.sendFile(__dirname + '/hate_ball_frontend.html');
});

//start the server
app.listen(PORT);
console.log('Express Server is running at http://127.0.0.1:' .PORT);

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

MongoClient.connect(uri, function (err, db) {
  if(err) throw err;
  //Write database Insert/Update/Query here..
  console.log("End the database stuff");
});
