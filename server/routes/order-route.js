let express = require("express");
let OrderRouter = express.Router();

let Order = require("../models/bar");

OrderRouter.get("/", (req, res) => {
    Order.find({}, (err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server", err});
        } else {
            res.status(200).send({"message": "Success! Here is your data!!", data});
        }
    });
});

OrderRouter.post("/", (req, res) => {
    let newOrder = new Order(req.body);
    newOrder.save((err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server", err});
        } else {
            res.status(200).send({"message": "Success! Your item was created", data});
        }
    });
});

OrderRouter.put("/:id", (req, res) => {
    Order.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
        if(err){
            res.status(500).send({"messae": "Error Within Server", err});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`})
        } else {
            res.status(200).send({"message": "item was successfully updated!", data});
        }
    });
});

OrderRouter.delete("/:id", (req, res) => {
    Order.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            res.status(500).send({"message": "Error Within Server"});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`});
        } else {
            res.status(200).send({"message": "item was successfully updated!", data});
        }
    });
});

module.exports = OrderRouter;