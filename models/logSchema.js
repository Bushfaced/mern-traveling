const Schema = require('mongoose').Schema;

const logSchema = new Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = logSchema;