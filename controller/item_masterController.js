const ITEM = require('../model/item_masterModel');

//________________ Item Create API ___________________________
exports.createItem = async (req, res, next)=>{
    try {
      req.body.user_id = req.userId //for receive user_id
        const itemData = await ITEM.create(req.body) // create API
            console.log(itemData)
        res.status(201).json({
          status: "Yes",
          message: "Item create successful",
          data: itemData,
         
        })
      } catch (error) {
        res.status(404).json({
          status:"Fail",
          message:error.message,
        })
      }
}

//_________________________________________________________
exports.updateItem = async (req, res, next)=>{
    try {
         const data = await ITEM.findByIdAndUpdate(req.query._id, req.body, {new: true}) 
            
        res.status(201).json({
          status: "Yes",
          message: "Update Item successful",
          data
        })
      } catch (error) {
        res.status(404).json({
          status:"Fail",
          message:error.message,
        })
      }
}

//_________________________________________________________
exports.getItem = async (req, res, next)=>{
    try {
        const itemData = await ITEM.findById(req.params.id) // get API
            
        res.status(201).json({
          status: "Yes",
          message: "Item get successful",
          data: itemData,
         
        })
      } catch (error) {
        res.status(404).json({
          status:"Fail",
          message:error.message,
        })
      }
}

//_________________________________________________________
exports.getAllItems = async (req, res, next)=>{
    try {
        const itemData = await ITEM.find() // get API
            
        res.status(201).json({
          status: "Yes",
          message: "All items get successful",
          data: itemData,
         
        })
      } catch (error) {
        res.status(404).json({
          status:"Fail",
          message:error.message,
        })
      }
}

//_________________________________________________________
exports.deleteItem = async (req, res, next)=>{
    try {
         await ITEM.findByIdAndDelete(req.query._id) 
            
        res.status(201).json({
          status: "Yes",
          message: "Delete item successful",
                 
        })
      } catch (error) {
        res.status(404).json({
          status:"Fail",
          message:error.message,
        })
      }
}


