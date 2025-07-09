require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieparser = require("cookie-parser");
const mongoose_connect = require('./mongo_db/mongo-connect');
const router = require('./Routes/Router');

mongoose_connect();
app.use(cookieparser());
app.use(express.json());
app.use(cors(
    {
        origin: process.env.FRONTEND_URL, // Change to your frontend domain
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],  // Allowed methods
        credentials: true, // 🔥 Required to allow cookies
    }
));
app.use(express.urlencoded({extended:true}));

app.use("/",router);

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello"});
})




app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})