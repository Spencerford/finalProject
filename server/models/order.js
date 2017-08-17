let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    orders: [{
        
    }],
});

module.exports = mongoose.model("order", OrderSchema);{}