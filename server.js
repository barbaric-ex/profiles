const express = require("express");
const routes = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

///root

app.use("/", routes);

app.listen(3000, function () {
  console.log("Listening port 3000.......");
});
