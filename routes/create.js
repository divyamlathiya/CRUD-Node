var express = require('express');
var router = express.Router();
var response = require('../utilities/responseManager.js');
var Student = require('../models/stud.model.js');

/* GET home page. */
router.post('/', async function(req, res, next) {

    const { firstName, lastName, age, grade, rollNum, email, phone, address, subjects, isActive } = req.body;

    if (firstName) {
        if (lastName) {
            if (age) {
                if (grade) {
                    if (rollNum) {
                        if (email) {
                            if (phone) {
                                if (address) {
                                    if (subjects) {
                                      if (isActive) {
                                        const existingRollNum = await Student.findOne({rollNum:rollNum});
                                        if (existingRollNum) {
                                            return response.onError(res, "Entered roll num is exists");
                                        } else {
                                            const existingEmail = await Student.findOne({email:email});
                                            if (existingEmail) {
                                                return response.onError(res, "Entered email is exists");
                                            } else {
                                                const existingPhone = await Student.findOne({phone:phone});
                                                if (existingPhone) {
                                                    return response.onError(res, "Entered phone num is exists");
                                                } else {
                                                    const newStud = new Student({
                                                        firstName:firstName,
                                                        lastName:lastName,
                                                        age:age,
                                                        grade:grade,
                                                        rollNum:rollNum,
                                                        email:email,
                                                        phone:phone,
                                                        address:address,
                                                        subjects:subjects,
                                                        isActive:isActive
                                                    });
                                                    const saveStud = await newStud.save();
                                                    return response.onSuccess(res, saveStud, "Student data added successfully");
                                                }
                                            }
                                        }
                                      } else {
                                        return response.onError(res, "isActive is required field");
                                      }  
                                    } else {
                                        return response.onError(res, "Subject is required field");
                                    }
                                } else {
                                    return response.onError(res, "Address is required field");
                                }
                            } else {
                                return response.onError(res, "Phone number is required field");
                            }
                        } else {
                            return response.onError(res, "Email is required field");
                        }
                    } else {
                        return response.onError(res, "Roll number is required field");
                    }
                } else {
                    return response.onError(res, "Grade is required field");
                }
            } else {
                return response.onError(res, "Age is required field");
            }
        } else {
            return response.onError(res, "LastName is required field");
        }
    } else {
        return response.onError(res, "FirstName is required field");
    }

});

module.exports = router;


