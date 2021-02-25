const { Router } = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

var { Member } = require('../models/member.model');
const { route } = require('../routes/index.router');
 const accountSid = process.env.TWILIO_ACCOUNT_SID;
 
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid,authToken)
//Get Member record
  // => localhost:3000/members/
    router.get('/', (req, res) => {
        Member.find((err, docs) => {
            if(!err) {
                res.send(docs);
            }
            else{
                console.log('Error in retrieving Member:' + JSON.stringify(err,undefined,2));
            }
        });
    });
    // getting a specific member by id
    router.get('/:id', (req, res) => {
     if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    
     Member.findById(req.params.id, (err, doc) => {
         if(!err) {res.send(doc); }
         else {console.log('Error in Retrieving Member' + JSON.stringify(err, undefined, 2)); }
     });
    }); 
       // => localhost:3000/members/
//Insert new Member record into the DB collection
router.post('/', (req, res) =>{
    var memb = new Member ({
        title : req.body.title,
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
        //console.log(fileUpload)
       return memb.save((err, doc) => {
             if(!err) {
                res.send(doc);
            }
        else { console.log('Error in Member save: ' + JSON.stringify(err, undefined, 2)); }
    
//Sending an sms to the Member
  
    client.messages
      .create({
         body: "You have successfully created a medical aid with us. Your Policy number is:",
         from: process.env.TWILIO_PHONE_NUMBER,
         to: req.body.contactNumber
       })
      .then(message => console.log(message.sid))
      
         });
        });
    //Update
    router.put('/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    const memb = {
        title : req.body.title,
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
     memb.save((err, doc) => {
         if(!err) {res.send(doc); }
         else { console.log('Error in Member save: ' + JSON.stringify(err, undefined, 2)); }
     });
     });

//Update
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

const memb = {  
         title : req.body.title,
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
Member.findByIdAndUpdate(req.params.id, { $set: memb }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Member Update :' + JSON.stringify(err, undefined, 2)); }
});
});

//delete
//must also delete all beneficiaries
//cascade.All
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Member Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;