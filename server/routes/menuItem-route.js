let express = require("express");
let MenuRouter = express.Router();

let Menu = require("../models/bar");

MenuRouter.get("/", (req, res) => {
    Menu.find({}, (err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server", err});
        } else {
            res.status(200).send({"message": "Success! Here is your data!!", data});
        }
    });
});

MenuRouter.post("/", (req, res) => {
    let newMenu = new Menu(req.body);
    newMenu.save((err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server", err});
        } else {
            res.status(200).send({"message": "Success! Your item was created", data});
        }
    });
});

MenuRouter.put("/:id", (req, res) => {
    Menu.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
        if(err){
            res.status(500).send({"messae": "Error Within Server", err});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`})
        } else {
            res.status(200).send({"message": "item was successfully updated!", data});
        }
    });
});

MenuRouter.delete("/:id", (req, res) => {
    Menu.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server"});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`});
        } else {
            res.status(200).send({"message": "item was successfully updated!", data});
        }
    })
});

module.exports = MenuRouter