var express = require('express');
var router = express.Router();
var response = require('../utilities/responseManager.js');
var Student = require('../models/stud.model.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  const studData = Student.updateOne(
    {firstName: 'test'}, { $set: { firstName: 'Updated test' } }
  );

  if (studData) {
    return response.onSuccess(res, studData, "Record updated");
  } else {
    return response.onError(res, "No data found")
  }

});

module.exports = router;
