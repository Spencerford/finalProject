let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let barSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    activeOrders: [{
        type: Schema.Types.ObjectId,
        ref: "order",
    }],
    instructions: {
        type: Schema.Types.ObjectId,
        ref:"menuItem"
    },
    position: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    },
    label: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("bar", barSchema)