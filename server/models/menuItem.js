let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let menuSchema = new Schema({
   name: {
       type: String,
       required: true
    },
   category: String,
   instructions: String,
   price: {
       type: Number,
       required: true,
       default: 5
   }
});

module.exports = mongoose.model("menuItem", menuSchema)