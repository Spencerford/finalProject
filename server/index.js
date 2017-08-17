let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");
let path = require("path");
let settings = require("./config/settings.js");

let BarRouter = require("./routes/bar-route.js");
let MenuRouter = require("./routes/menuItem-route.js");
let OrderRouter = require("./routes/order-route.js");

mongoose.connect(settings.db);

let app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/bar", BarRouter);
app.use("/order", OrderRouter);
app.use("/menu", MenuRouter);

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"))
});

app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}`)
});