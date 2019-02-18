const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
//const MONGODB_URI = "mongodb://root:root123@ds015869.mlab.com:15869/pollapp"

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
