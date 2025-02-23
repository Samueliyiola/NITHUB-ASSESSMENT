const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// To get all users
exports.getAllUsers = async(req, res) => {
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};
// To register a new user
exports.registerUser = async(req, res) => {
    try{
        const {email, password, role} =  req.body;
        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.status(400).json({message: "User already exists"});
        }
        const newPassword = await bcrypt.hash(password, 10);
        const newUser = new User({email, password: newPassword, role});
        await newUser.save();
        return res.status(201).json({message: "User registered successfully"});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
};


// To login a User and create a session
exports.loginUser = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User does not exist"});
        }
        const checkPassword = bcrypt.compare(password, user.password);
        if(!checkPassword){
            return res.status(400).json({message: "Invalid username or password"});
        }
        const token = jwt.sign({email: user.email, role: user.role}, process.env.JWT_SECRET);
        return res.status(200).json({message: "User logged in successfully", token});
    }
    catch(error){
        return res.status(500).json({message : error.message})
    }
}