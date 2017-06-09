var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the home page route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use("/css", express.static(__dirname + '/public/css'));

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
