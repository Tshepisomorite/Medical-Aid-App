require('./config/config');
require('./models/db');
require('./config/passportConfig');

const connectDB = require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const rtsIndex = require('./routes/index.router');
const path = require('path'); // for getting file extension
const multer = require('multer'); // for uploading files
const {v4: uuidv4} = require('uuid'); // for naming files with random characters

//file upload
// const fileStorage = multer.diskStorage({
//       destination: (req, file, cb) => {
//          if(file.fieldname === "resume") {
//              cb(null, 'resumes');

//          }else {
//              cb(null, 'images');
//          }
//       },
//       filename: (req, file, cb) => {
//         cb(null, file.fieldname+"-"+uuidv4()+path.extname(file.originalname));
//       }
//     });
//     const fileFilter = (req, file, cb) => {
//         if(file.fieldname ==="resume") {
//             if(
//                 file.mimetype === 'application/pdf' ||
//                 file.mimetype === 'application/msword' ||
//                 file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//             ){
//                 cb(null,true);// check file type to be pdf, doc, or docx
//             }else {
//                 cb(null, false);
//             }
//         }else {
//             if (
//                 file.mimetype === 'image/png' ||
//                 file.mimetype === 'image/jpg' ||
//                 file.mimetype === 'image/jpeg'
//               ) {
//                 cb(null, true);
//               } else {
//                 cb(null, false); // else fails
//               }
//         }
//     };

var memberController = require('./controllers/member.controller');
var beneficiaryController = require('./controllers/beneficiary.controller');
connectDB();
var app = express();
//"MONGODB_URI":"mongodb+srv://Tshepi1234:1234Tshepi@cluster0.be5ue.mongodb.net/medicalAid?retryWrites=true&w=majority",
       
// middleware
app.use('/members', memberController);
app.use('/beneficiaries', beneficiaryController);
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);


//static files
// app.use(
//     multer(
//       { 
//         storage: fileStorage, 
//         limits:
//           { 
//             fileSize:'2mb' 
//           }, 
//         fileFilter: fileFilter 
//       }
//     ).fields(
//       [
//         { 
//           name: 'resume', 
//           maxCount: 1 
//         }, 
//         { 
//           name: 'image', 
//           maxCount: 1 
//         }
//       ]
//     )
//   );

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));