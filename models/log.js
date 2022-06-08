const mongoose = require('mongoose');

const logSchema = require('./logSchema');

module.exports = mongoose.model('Log', logSchema);