const friendData = require("../data/friends");

module.exports = function (app) {

    // displays a JSON of all possible friends
    app.get("/api/friends")

    // handles incoming survery results and compatibility logic
    app.post("/api/friends")

}