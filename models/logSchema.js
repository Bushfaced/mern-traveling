const Schema = require('mongoose').Schema;

const logSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = logSchema;