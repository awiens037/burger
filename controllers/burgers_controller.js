var express = require("express");
var router = express.Router();
// Import the model to use database functions.
var burger = require("../models/burger.js");
// Create all routes, set up logic within routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function () {
            res.redirect("/");
        });
});
router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
});
// Export routes for server.js to use.
module.exports = router;