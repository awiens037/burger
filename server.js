var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;
var app = express();

// Serve Static content for the app from public directory in app directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(methodOverride("_method"));

// Set Up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import Routes and give server access
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(port, function () {
    console.log("listening on port", port);
});