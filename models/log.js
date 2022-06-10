const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const logSchema = new Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Log', logSchema);