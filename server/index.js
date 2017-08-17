let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

let BarRouter = require("./routes/bar-route.js");
let MenuRouter = require("./routes/menuItem-route.js");
let OrderRouter = require("./routes/order-route.js");

mongoose.connect("mongodb://localhost:27017/barApp");

let app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/bar", BarRouter);
app.use("/order", OrderRouter);
app.use("/menu", MenuRouter);

app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}`)
});