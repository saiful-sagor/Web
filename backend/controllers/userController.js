const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
// const sendToken = require("../utils/jwtToken");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");
// const cloudinary = require("cloudinary");


exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    /*
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });
    */
  
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name,
      email,
      password,
      /*
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      }
      */
      avatar:{
        public_id:"this is sample id",
        url:"smaple url"
      },
    });

    const token = user.getJWTToken();
    res.status(201).json({
        succes:true,
        token,
    })
  
   // sendToken(user, 201, res);

  });

  ///
  exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }

    const token = user.getJWTToken();
    res.status(200).json({
        succes:true,
        token,
    })
  
    //sendToken(user, 200, res);
  });
  