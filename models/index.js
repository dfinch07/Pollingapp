const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb://root:root123@ds015869.mlab.com:15869/pollapp"

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/pollApp")
module.exports.User = require('./user');
module.exports.Poll = require('./poll');
