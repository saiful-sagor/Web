const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
/// register
router.post("/register",async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
            ).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).jason(savedUser);
    }catch(err){
       res.status(500).json(err);
    }
})

// login 
////////////
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user) {
            res.status(401).json("username doesn't exist")
        }
        else
        {
            const hashedPassword = CryptoJs.AES.decrypt(
                user.password,
                process.env.PASS_SEC
                );
    
            const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    
            if(originalPassword != req.body.password) {
                res.status(401).json("wrong password");
            }
            else{
                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SEC,
                {expiresIn:"3d"}
                );
                const {password, ...others} = user._doc;
                res.status(200).json({...others,accessToken});
            }
        }
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router