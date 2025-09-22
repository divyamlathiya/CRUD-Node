var express = require('express');
var router = express.Router();
var response = require('../utilities/responseManager.js');
var Student = require('../models/stud.model.js');

/* GET home page. */
router.get('/', async function(req, res, next) {

  const studData = await Student.find({ firstName: "Divyam" });

  if (studData) {
    return response.onSuccess(res, studData);
  } else {
    return response.onError(res, "no data found");
  }

});

module.exports = router;
