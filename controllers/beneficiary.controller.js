const { Router } = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

// const Member = mongoose.model('Member');

var { Beneficiary } = require('../models/member.model');
const { route } = require('../routes/index.router');

   //Get Beneficiary record
    // => localhost:3000/beneficiaries/
    router.get('/', (req, res) => {
        Beneficiary.find((err, docs) => {
            if(!err) {
                res.send(docs);
            }
            else{
                console.log('Error in retrieving Beneficiary:' + JSON.stringify(err,undefined,2));
            }
        });
    });
    // getting a specific member by id
    router.get(':id', (req, res) => {
     if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    
     Member.findById(req.params.id, (err, doc) => {
         if(!err) {res.send(doc); }
         else {console.log('Error in Retrieving Beneficiary' + JSON.stringify(err, undefined, 2)); }
     });
    }); 
       
//Insert new Member record into the DB collection
router.post('/', (req, res) =>{
    const ben = new Beneficiary ({
        title : req.body.title,
        initials: req.body.initials,
        initials: req.body.initials,
        firstName :req.body.firstName,
        surname : req.body.surname,
        idNumber : req.body.idNumber,
        dateOfBirth : req.body.dateofBirth,
        gender : req.body.gender,
        contactNumber : req.body.contactNumber,
        cellphoneNumber : req.body.cellphoneNumber,
        address: req.body.address,
        grossMonthlyIncome : req.body.grossMonthlyIncome,
        relationshipToMember : req.body.relationshipToMember,
        isBenefiaryLivesSameAddress : req.body.isBenefiaryLivesSameAddress,
        city : req.body.city,
        nameOfGeneralPractiner : req.body.nameOfGeneralPractiner,
        doctorAdddress : req.body.doctorAdddress,
        doctorContactNumber : req.body.doctorContactNumber,
        numOfYearsConsulted : req.body.numOfYearsConsulted,
        weight : req.body.weight,
        height : req.body.height,
        employer : req.body.employer,
        jobTitle : req.body.jobTitle,
        duration : req.body.duration,
        refContactNumber : req.body.refContactNumber,
        bankName : req.body.bankName,
        bankCode : req.body.bankCode,
        branchName : req.body.branchName,
        accHolderName : req.body.accHolderName,
        accountNumber : req.body.accountNumber,
        accountType : req.body.accountType,
        fileUpload : req.file
    });
     ben.save((err, doc) => {
         if(!err) {res.send(doc); }
         else { console.log('Error in Member save: ' + JSON.stringify(err, undefined, 2)); }
     });
     });

//Update
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

const ben = {
    title : req.body.title,
    initials: req.body.initials,
    initials: req.body.initials,
    firstName :req.body.firstName,
    surname : req.body.surname,
    idNumber : req.body.idNumber,
    dateOfBirth : req.body.dateofBirth,
    gender : req.body.gender,
    contactNumber : req.body.contactNumber,
    cellphoneNumber : req.body.cellphoneNumber,
    address: req.body.address,
    grossMonthlyIncome : req.body.grossMonthlyIncome,
    relationshipToMember : req.body.relationshipToMember,
    isBenefiaryLivesSameAddress : req.body.isBenefiaryLivesSameAddress,
    city : req.body.city,
    nameOfGeneralPractiner : req.body.nameOfGeneralPractiner,
    doctorAdddress : req.body.doctorAdddress,
    doctorContactNumber : req.body.doctorContactNumber,
    numOfYearsConsulted : req.body.numOfYearsConsulted,
    weight : req.body.weight,
    height : req.body.height,
    employer : req.body.employer,
    jobTitle : req.body.jobTitle,
    duration : req.body.duration,
    refContactNumber : req.body.refContactNumber,
    bankName : req.body.bankName,
    bankCode : req.body.bankCode,
    branchName : req.body.branchName,
    accHolderName : req.body.accHolderName,
    accountNumber : req.body.accountNumber,
    accountType : req.body.accountType,
};
ben.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Beneficiary Update :' + JSON.stringify(err, undefined, 2)); }
});
});

//delete
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Beneficiary Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;