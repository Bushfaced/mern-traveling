// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Log = require('./models/log');

// Local variables will come in handy for holding retrieved documents
let user, log;
let users, logs;