const mongoose = require("mongoose");
const validator = require("validator");

// schema
// A mongoose schema defines the structure of the document,
// default value, validators, etc.,
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already Present"],
        validite(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is inValid ");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: [true, "Phone number already Present"],
    },
    address: {
        type: String,
        required: true
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});


// creation a new collection 
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;