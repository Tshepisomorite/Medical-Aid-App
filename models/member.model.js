const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
var Member = mongoose.model('Member', {
    title: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    idNumber: {
        type: Number,
        required: true
    },
    dateOfBirth:{
        type:Date,
        required: true
    },
    gender: {
        type:String,
        required: true
    },
    contactNumber:{
        type: Number,
        required:false
    },
    cellphoneNumber:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required: true
    },
    grossMonthlyIncome:{
        type: Number,
        required:false
    },
    relationshipToMember :{
        type: String,
        required:true
    },
    isBenefiaryLivesSameAddress: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required:true
    },
    nameOfGeneralPractiner:{
        type: String,
        required:false
    },
    doctorAdddress: {
        type: String,
        required: false
    },
    doctorContactNumber: {
        type: Number,
        required: false
    },
    numOfYearsConsulted: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    employer: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    refContactNumber: {
        type: Number,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    bankCode: {
        type: Number,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    accHolderName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: Number,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    fileUpload: {
        type: String,
        require: false
    },
    beneficiaries: {
      information: [
          {
            beneficiaryId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Beneficiary',}
            }
        ]
    }

});
module.exports = { Member };

