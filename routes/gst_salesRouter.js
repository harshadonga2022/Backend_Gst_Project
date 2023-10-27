var express = require('express');
var router = express.Router();
var gstSalesController = require('../controller/gst_salesController');
var authToken = require('../middleware/authToken');

/* Create sales API*/
router.post('/create', authToken.SecureToken, gstSalesController.createSales );

/* Update sales API*/
// router.patch('/update', authToken.SecureToken,  gstSalesController.updateSales) ;

/* one sales data get API*/
// router.get('/get/:id', authToken.SecureToken, gstSalesController.getSales );

/* Delete sales API*/
// router.delete('/delete', authToken.SecureToken, gstSalesController.deleteSales) ;

/* All sales data get API*/
// router.get('/', authToken.SecureToken, gstSalesController.getAllSalesBill );


module.exports = router;
