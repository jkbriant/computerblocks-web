var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// var logger = function(req, res, next) {
//   console.log("Logging...");
//   next();
// }

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, "public")));

var users = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@gmail.com",
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Smith",
    email: "bobsmith@gmail.com",
  },
  {
    id: 3,
    first_name: "Jill",
    last_name: "Jackson",
    email: "jilljackson@gmail.com",
  },
]

app.get("/", function(req, res) {
  res.render("index", {
    title: "Customers",
    users: users
  });
});

app.post("/users/add", function(req, res) {
  var newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }

  console.log(newUser);
});

app.listen(process.env.PORT || 5000, function() {
  console.log("Server Started (5000?)...");
});
