// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Log = require('./models/log');
// const Category = require('./models/category');
// const Order = require('./models/order');
//no idea if or how to use this helper

// Local variables will come in handy for holding retrieved documents
let user, log;
let users, logs;