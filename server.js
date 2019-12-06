// npm path
const path = require("path");

// npm express
const express = require("express");

const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// server begins listening
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});
