const friendData = require("../data/friends");

module.exports = function (app) {

    // displays a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // handles incoming survey results and compatibility logic
    app.post("/api/friends", function (req, res) {

        // new friend object
        let newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        }

        // adds scores from survey to newFriend scores
        for (let i = 0; i < req.body.scores.length; i++) {
            newFriend.scores.push(parseInt(req.body.scores[i]))
        }

        // keeps track of relatability score for each friend
        let compareScoresArr = [];
        // compares new friend scores to existing friends
        for (let i = 0; i < friendData.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < newFriend.scores.length; j++) {
                totalDifference += Math.abs(newFriend.scores[j] - friendData[i].scores[j]);
            }
            compareScoresArr.push(totalDifference);
        }

        


    });

}
