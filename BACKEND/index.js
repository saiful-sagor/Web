const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
dotenv.config()

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("db connection done")).catch((err)=>{
    console.log(err)
})
app.use(express.json());
/// test
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)

app.listen(process.env.PORT || 5000,()=>{
    console.log("backend running")
})