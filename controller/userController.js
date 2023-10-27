const USER = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userToken = require('../middleware/authToken.js')

//_____________________ User Create API ____________________________
exports.registerUser = async (req, res, next) => {
  try {
 
    // const username = req.body.username;
    if (!req.body.username || !req.body.mobile_no || !req.body.password) {
      throw new Error("Please enter valid fields") //Reuqire all data 
    }
    const checkData = await USER.findOne({ username: req.body.username })
    if (checkData) {
      throw new Error("User is already Register") //Reuqire all data 
    }
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const userData = await USER.create(req.body) // create API
    const userToken = await jwt.sign({ id: userData._id }, 'userkey');
    console.log(userToken); //API ni body ma data ave
    res.status(201).json({
      status: "Success",
      message: "The user create a successful",
      data: userData,
      Token: userToken
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}

//______________________ User Login API ___________________________________
exports.loginUser = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      throw new Error("Please enter valid fields")
    }
    const userData = await USER.findOne({ username: req.body.username })
    console.log(userData);
    if (!userData) {
      throw new Error("Username is not valid")
    }
    const checkPass = await bcrypt.compare(req.body.password, userData.password)
    if (!checkPass) {
      throw new Error("Please enter valid password")
    }
    const userToken = await jwt.sign({ id: userData._id }, 'userkey');

    res.status(200).json({
      status: "Success",
      message: "User login successful",
      data: userData,
      token: userToken
    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "User not login",
      error: error.message
    })
  }
}

//______________________ All User get API ___________________________________
exports.getAllUser = async (req, res, next) => {
  try {
    const getUserData = await USER.find()
    res.status(200).json({
      status: "Success",
      message: "All users get successful",
      data: getUserData,
    });
  } catch (error) {
    res.status(400).json({
      status: "Success",
      message: "no data",
      error: error.message
    });
  }
}

//___________________ One User get API ______________________________________
exports.getUser = async (req, res, next) => {
  try {
    const getUserData = await USER.findById(req.params.id);
    if (!getUserData) {
      throw new Error(" user data not found");
    }
    return res.status(200).json({
      status: "Success",
      message: "Get a user successful",
      data: getUserData,
    });
  } catch (error) {
    res.status(400).json({
      status: "Success",
      message: "An error occurred while fetching user data",
      error: error.message
    });
  }
}

//__________________ User Delete API _______________________________________
exports.deleteUser = async (req, res, next) => {
  try {
    await USER.findByIdAndDelete(req.userId)
    token = userToken
    console.log(token)

    res.status(200).json({
      status: "Success",
      message: "User delete ",
      token
    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "User not delete successful",
      error: error.message
    })
  }
}

//_________________ One user update ______________________________________
exports.updateUser = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 8);
    }
    const updateData = await USER.findByIdAndUpdate(req.query._id, req.body, {runValidators:true, new:true})
    console.log(updateData)
    if (!updateData) {
      throw new Error("data not found")
    }

    res.status(200).json({
      status: "Success",
      message: "User update successful",
      data: updateData,
    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "User not update",
      error: error.message
    })
  }
}
