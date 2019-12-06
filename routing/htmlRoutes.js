const path = require("path");

module.exports = function (app) {

    // displays survey page
    app.get("/survey", function (res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });

    // displays home page
    app.get("*", function (res) {
        res.sendFile(path.join(__dirname, "../public", "home.html"));
    });

}