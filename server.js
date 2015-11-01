var express = require("express");

var path = require("path");

var session = require('express-session');

var app = express();

app.use(session({secret: 'codingdojorocks'}));  

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

require("./server/config/mongoose.js");

require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("Node.js running on 8000");
});