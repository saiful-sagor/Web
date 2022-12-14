const express = require("express");
const app = express();
const product = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const payment = require("./routes/paymentRoute");
const dotenv = require("dotenv");



dotenv.config({path:"backend/config/config.env"});
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({useTempFiles: true}))



app.use(errorMiddleware);

module.exports = app;