const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');


//const ctrlMember = require('../controllers/member.controller');
//const ctrlBeneficiary = require('../controllers/beneficiary.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
//router.post('/registerMember', ctrlMember.registerMember);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//router.post('/registerBeneficiary', ctrlBeneficiary.registerBeneficiary);



module.exports = router;



 