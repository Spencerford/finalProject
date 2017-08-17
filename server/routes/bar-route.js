let express = require("express");
let BarRouter = express.Router();

let Bar = require("../models/bar");

BarRouter.get("/", (req, res) => {
    Bar.find({}, (err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server", err});
        } else {
            res.status(200).send({"message": "Success! Here is your data!!", data});
        }
    });
});

BarRouter.post("/", (req, res) => {
    let newBar = new Bar(req.body);
    newBar.save((err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server", err});
        } else {
            res.status(200).send({"message": "Success! Your item was created", data});
        }
    });
});

BarRouter.put("/:id", (req, res) => {
    Bar.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
        if(err){
            res.status(500).send({"messae": "Error Within Server", err});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`})
        } else {
            res.status(200).send({"message": "item was successfully updated!", data});
        }
    });
});

BarRouter.delete("/:id", (req, res) => {
    Bar.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server"});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`});
        } else {
            res.status(200).send({"message": "item was successfully updated!", data});
        }
    })
});

module.exports = BarRouter