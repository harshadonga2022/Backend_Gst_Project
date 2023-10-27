var express = require('express');
var router = express.Router();
var partyController = require('../controller/party_masterController');
var authToken = require('../middleware/authToken');

/* Create party API*/
router.post('/create', authToken.SecureToken, partyController.createParty );

/* Update party API*/
router.patch('/update', authToken.SecureToken,  partyController.updateParty) ;

/* one party data get API*/
router.get('/get/:id', authToken.SecureToken, partyController.getParty );

/* Delete party API*/
router.delete('/delete', authToken.SecureToken, partyController.deleteParty) ;

/* All party data get API*/
router.get('/', authToken.SecureToken, partyController.getAllParty );


module.exports = router;
