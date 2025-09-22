const mongoose = require('mongoose');

const mongoDB = mongoose.createConnection(process.env.MONGO_URI);

module.exports = mongoDB;