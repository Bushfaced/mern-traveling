const mongoose = require('mongoose');

const itemSchema = require('./logSchema');

module.exports = mongoose.model('Item', itemSchema);