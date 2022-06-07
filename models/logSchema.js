const Schema = require('mongoose').Schema;

const logSchema = new Schema({
  destination: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = logSchema;