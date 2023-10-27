const PARTY = require('../model/party_masterModel');
const mongoose = require('mongoose');


//____________ Party Create API funcation validator ______________
// exports.createParty = async (req, res, next) => {
//   try {
//     req.body.user_id = req.userId
//     const gstRegex = /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/; 
//     const gstNumber = req.body.gst_no;
//     if (gstRegex.test(gstNumber)) {
//       const partyData = await PARTY.create(req.body) // create API
//       res.status(201).json({
//         status: "Yes",
//         message: "Party create successful",
//         data: partyData,
//       })
//     } else {
//       res.status(404).json({
//         status: "Fail",
//         message: 'Invalid GST number',
//       })
//     } 
    
//   } catch (error) {
//     res.status(500).json({
//       status: "Fail",
//       message: error.message,
//     })
//   }
// }

//_____________ Party Create API model validator _________________
exports.createParty = async (req, res, next) => {
  try {
    req.body.user_id = req.userId //for receive user_id
    const partyData = await PARTY.create(req.body) // create API
      res.status(201).json({
        status: "Yes",
        message: "Party create successful",
        data: partyData,
      })

  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error.message,
    })
  }
}

//_____________ Party Update API _________________________________
exports.updateParty = async (req, res, next) => {
  try {
    await PARTY.findByIdAndUpdate(req.query._id, req.body, { new: true })

    res.status(201).json({
      status: "Yes",
      message: "Update party successful",

    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}

//_____________ Party Get API ____________________________________
exports.getParty = async (req, res, next) => {
  try {
    const partyData = await PARTY.findById(req.params.id) // get API

    res.status(201).json({
      status: "Yes",
      message: "Party get successful",
      data: partyData,

    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}

//_______ populate method get all parties ________________________
// exports.getAllParty = async (req, res, next) => {
//   try {
//     const user_id11 = req.userId;
//     // console.log(user_id11);
//     //   console.log(req.body)
//     const partyData = await PARTY.find({ user_id: user_id11 }).populate('user_id'); //To get all the data of a user
//     // const partyData = await PARTY.find().populate('user'); //for all data received from parties collection

//     console.log(partyData)
//     res.status(201).json({
//       status: "Yes",
//       message: "All party get successful",
//       data: partyData,

//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message,
//     })
//   }
// }

//_______aggregate method get all parties ________________________
exports.getAllParty = async (req, res, next)=>{
  try {
    const user_id22 = req.userId; 
    // console.log(user_id);

    const partyData = await PARTY.aggregate([
      {
        $match: { 'user_id': new mongoose.Types.ObjectId(user_id22)} // Use mongoose to convert the user_id to ObjectId
      },
      {
        $lookup: {
          from: 'users', // collection name as per MongoDB Compass
          localField: 'user_id', // Field in the "PARTY" model
          foreignField: '_id',
          as: 'user_ids', // Array name that holds the joined data
        },
      },
     
    ]);
      console.log(partyData) 
      res.status(201).json({
        status: "Yes",
        message: "All party get successful",
        data: partyData,       
      })
    } catch (error) {
      res.status(404).json({
        status:"Fail",
        message:error.message,
      })
    }
}

//______________  Party Delete API _________________________________
exports.deleteParty = async (req, res, next) => {
  try {
    await PARTY.findByIdAndDelete(req.query._id)

    res.status(201).json({
      status: "Yes",
      message: "Delete party successful",

    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}


