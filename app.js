const express = require("express");
const app = express();
const router = require("./routes/routes");

const mongoose = require("mongoose");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/adriansApp");

app.use("/", router);

app.listen( 3000,function(){
    console.log("Adrian App berhasil berjalan pada port 3000");
})