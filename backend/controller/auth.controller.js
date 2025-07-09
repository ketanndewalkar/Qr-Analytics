const { user } = require("../models/Authschema");

user

const signup = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const any = await user.findOne({ email });
    // console.log(any)
    if(any){
    console.log("in any");
      return res
      .status(500)
      .json({ message: "User Already Exists" });
    }
    console.log("normal flow")
    const newUser = new user({ username, password, email });
    await newUser.save();
    res.cookie("token", await newUser.generateAuthToken(), {
      httpOnly: true,
      secure: true,
    });
    res
      .status(201)
      .json({ token:await newUser.generateAuthToken(),user: newUser, message: "User created successfully" });
  } catch (error) {
    console.log("in error");

    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const login = async (req, res) => {
    console.log("Login request received");
  try {
    const {email, password } = req.body;
    const User = await user.findOne({email});
    if (!User) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const Valid = await User.comparePassword(password);
    if (!Valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.cookie("token", await User.generateAuthToken(), {
      httpOnly: true,
      secure: true,
    });
    return res.status(200).json({
      token:await User.generateAuthToken(),
      id: User._id,
      user:User,
      message: "User logged in successfully",
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};



module.exports = { signup, login };