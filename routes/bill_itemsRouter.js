var express = require('express');
var router = express.Router();
const billItemController = require('../controller/bill_itemsController');
const authToken = require('../middleware/authToken');

/* Create Item API*/
router.post('/create', authToken.SecureToken, billItemController.createBillItem );

/* Update party API*/
router.patch('/update', authToken.SecureToken, billItemController.updateBillItem) ;

/* one item data get API*/
router.get('/get/:id', authToken.SecureToken, billItemController.getBillItem );

/* Delete party API*/
router.delete('/delete',authToken.SecureToken,  billItemController.deleteBillItem) ;

/* Get all items data API*/
router.get('/', billItemController.getAllBillItems );


module.exports = router;
