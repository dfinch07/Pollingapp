const mongoose = require('mongoose');
mongoose.set('debug', true);
const db = require('../config/keys').mongoURI;
mongoose.Promise = global.Promise;
//const MONGODB_URI = "mongodb://root:root123@ds015869.mlab.com:15869/pollapp"


mongoose
.connect(db)
.then(()=> console.log('mongodb connected'))
.catch (err => console.log(err));


module.exports.User = require('./user');
module.exports.Poll = require('./poll');
