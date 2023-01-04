const mongoose = require("mongoose");
const validator = require("validator");
// require("../db/conn");


// schema
// A mongoose schema defines the structure of the document,
// default value, validators, etc.,
const studentSchema=new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength: 3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id already Present"],
        validite(value){ 
            if(!validator.isEmail(value)){
                throw new Error("Email is inValid ");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:[true, "Phone number already Present"],
    },
    address:{
        type:String,
        required:true
    },
    active: Boolean,
    date: {
        type:Date,
        default: Date.now
    }
});


// creation a new collection 
const Student = new mongoose.model("Student", studentSchema);

module.exports= Student;

// Insert Data in MongoDB
// const createDocument = async () =>{
//     try {
//         const reatUsers = new Student({
//             name : "Sunny ",
//             email: "sunny@",
//             phone : "8266881450",
//             address: "Faridnagar",
//             active: true
//         });
//         const InsertData = await reatUsers.save();
//         console.log(InsertData); 
//     } catch (err) {
//         console.log(err);
//     }
// }
// createDocument();