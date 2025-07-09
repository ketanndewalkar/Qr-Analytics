const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});
UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password,await bcrypt.genSalt(10));
        next();
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({
        user:this
    },"Ketan");
    return token;
}

UserSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}
const user = mongoose.model("user",UserSchema);

module.exports = {user,UserSchema};