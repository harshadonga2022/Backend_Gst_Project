const GST_SALES = require('../model/gst_salesModel');
const mongoose = require('mongoose');

//_____________ Sales Create API model validator _________________
exports.createSales = async (req, res, next) => {
  try {
    req.body.user_id = req.userId //for receive user_id
    
    const salesData = await GST_SALES.create(req.body) // create API
      res.status(201).json({
        status: "Yes",
        message: "Sales Bill create",
        data: salesData,
      })

  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error.message,
    })
  }
}

//_____________ Sales Update API _________________________________
// exports.updateSales = async (req, res, next) => {
//   try {
//     await GST_SALES.findByIdAndUpdate(req.query._id, req.body, { new: true })

//     res.status(201).json({
//       status: "Yes",
//       message: "Update party successful",

//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message,
//     })
//   }
// }

// //_____________ Sales Get API ____________________________________
// exports.getSales = async (req, res, next) => {
//   try {
//     const salesData = await GST_SALES.findById(req.params.id) // get API

//     res.status(201).json({
//       status: "Yes",
//       message: "Party get successful",
//       data: salesData,

//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message,
//     })
//   }
// }

// //_______ populate method get all Sales ________________________
// // exports.getAllSales = async (req, res, next) => {
// //   try {
// //     const user_id11 = req.userId;
// //     // console.log(user_id11);
// //     //   console.log(req.body)
// //     const salesData = await GST_SALES.find({ user_id: user_id11 }).populate('user_id'); //To get all the data of a user
// //     // const partyData = await PARTY.find().populate('user'); //for all data received from parties collection

// //     console.log(partyData)
// //     res.status(201).json({
// //       status: "Yes",
// //       message: "All party get successful",
// //       data: salesData,

// //     })
// //   } catch (error) {
// //     res.status(404).json({
// //       status: "Fail",
// //       message: error.message,
// //     })
// //   }
// // }

// //_______aggregate method get all Sales ________________________
// exports.getAllSalesBill = async (req, res, next)=>{
//   try {
//     const user_id22 = req.userId; 
//     // console.log(user_id);

//     const salesData = await GST_SALES.aggregate([
//       {
//         $match: { 'user_id': new mongoose.Types.ObjectId(user_id22)} // Use mongoose to convert the user_id to ObjectId
//       },
//       {
//         $lookup: {
//           from: 'users', // collection name as per MongoDB Compass
//           localField: 'user_id', // Field in the "PARTY" model
//           foreignField: '_id',
//           as: 'user_ids', // Array name that holds the joined data
//         },
//       },
     
//     ]);
//       console.log(partyData) 
//       res.status(201).json({
//         status: "Yes",
//         message: "All party get successful",
//         data: salesData,       
//       })
//     } catch (error) {
//       res.status(404).json({
//         status:"Fail",
//         message:error.message,
//       })
//     }
// }

// //______________  sales Delete API _________________________________
// exports.deleteSales = async (req, res, next) => {
//   try {
//     await GST_SALES.findByIdAndDelete(req.query._id)

//     res.status(201).json({
//       status: "Yes",
//       message: "Delete party successful",

//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "Fail",
//       message: error.message,
//     })
//   }
// }


