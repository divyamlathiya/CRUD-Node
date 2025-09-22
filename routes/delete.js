var express = require('express');
var router = express.Router();
var response = require('../utilities/responseManager.js');
var Student = require('../models/stud.model.js');

/* GET home page. */
router.get('/', async function(req, res, next) {

  const studData = await Student.findOneAndDelete({ firstName: "test"});

  if (studData) {
    return response.onSuccess(res, studData, "Record deleted");
  } else {
    return response.onError(res, "No data found");
  }

});

module.exports = router;
