const friendData = require("../data/friends");

module.exports = function (app) {

    // displays a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // handles incoming survey results and compatibility logic
    app.post("/api/friends", function (req, res) {
        
        // let totalDifference = 

        for (let i = 0; i < friends.length; i++) {
            console.log(i);
        }

    });

}
