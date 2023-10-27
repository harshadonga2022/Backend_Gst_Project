const USER = require('../model/userModel')
var jwt = require('jsonwebtoken');

exports.SecureToken = async (req, res, next) => {
     try {
       let usertoken = req.headers.authorization;
       if(!usertoken){
           throw new Error ("please attched token")
       }
       let checkToken = jwt.verify(usertoken, "userkey")
       let checkuser = await USER.findById(checkToken.id)
       if(!checkuser){
           throw new Error ("User not found")
       }
       req.userId = checkToken.id
       
       next()

     } catch (error) {
        res.status(401).json({
          message:error.message
        })    
     }
}