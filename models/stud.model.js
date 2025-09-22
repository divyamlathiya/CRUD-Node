const mongoose = require('mongoose');
const constant = require('../utilities/constant.js');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    grade: {
        type: String,
        required: true
    },

    rollNum: {
        type: Number,
        unique: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    phone: {
        type: Number,
        unique: true,
        required: true
    },

    address: [
        {
            street: {
                type: String,
                required: true
            },

            city: {
                type: String,
                required: true
            },

            state: {
                type: String,
                required: true
            },

            pincode: {
                type: Number,
                required: true
            }
        }
    ],

    subjects: {
        type: [String],
    },

    isActive: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model(constant.MODELS.students, studentSchema);