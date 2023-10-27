var express = require('express');
var router = express.Router();
const itemController = require('../controller/item_masterController');
const authToken = require('../middleware/authToken');

/* Create Item API*/
router.post('/create', authToken.SecureToken, itemController.createItem );

/* Update party API*/
router.patch('/update', authToken.SecureToken, itemController.updateItem) ;

/* one item data get API*/
router.get('/get/:id', authToken.SecureToken, itemController.getItem );

/* Delete party API*/
router.delete('/delete',authToken.SecureToken,  itemController.deleteItem) ;

/* Get all items data API*/
router.get('/', itemController.getAllItems );


module.exports = router;
