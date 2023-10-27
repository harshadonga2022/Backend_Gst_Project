const BILL_ITEMS = require('../model/bill_itemsModel');

//________________ Bill Item Create API ___________________________
exports.createBillItem = async (req, res, next) => {
    try {
        req.body.user_id = req.userId //for receive user_id
        //   req.body.item_master_id = req.userId //for receive item_master_id
        const billItemData = await BILL_ITEMS.create(req.body) // create API
        console.log(billItemData)
        res.status(201).json({
            status: "Yes",
            message: "Bill Item create successful",
            data: billItemData,

        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}

//________________ Bill Item Update API _________________________________
exports.updateBillItem = async (req, res, next) => {
    try {
        console.log(req.query._id)

        const updateData = await BILL_ITEMS.findByIdAndUpdate(req.query._id, req.body, {new: true })
        console.log(updateData)
        if (!updateData) {
            throw new Error("data not found")
        }

        res.status(201).json({
            status: "Yes",
            message: "Update Bill Item successful",
            data: updateData,
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}

//_________________________________________________________
exports.getBillItem = async (req, res, next) => {
    try {
        const billItemData = await BILL_ITEMS.findById(req.params.id) // get API
        res.status(201).json({
            status: "Yes",
            message: "Bill Item get successful",
            data: billItemData,

        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}

//_________________________________________________________
exports.getAllBillItems = async (req, res, next) => {
    try {
        const BillitemData = await BILL_ITEMS.find() // get API

        res.status(201).json({
            status: "Yes",
            message: "All bill items get successful",
            data: BillitemData,

        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}

//_________________________________________________________
exports.deleteBillItem = async (req, res, next) => {
    try {
        await BILL_ITEMS.findByIdAndDelete(req.query._id)

        res.status(201).json({
            status: "Yes",
            message: "Delete Bill item successful",

        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message,
        })
    }
}


