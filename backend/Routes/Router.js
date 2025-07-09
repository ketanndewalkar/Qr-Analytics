const express = require("express");
const router = express.Router();
const {signup , login} = require("../controller/auth.controller");
const AuthMiddleware = require("../middleware/AuthMiddleware");

router.get("/",(req,res)=>{
    res.send("hello");
})
router.post("/login",login);
router.post("/signup",signup);
module.exports = router;