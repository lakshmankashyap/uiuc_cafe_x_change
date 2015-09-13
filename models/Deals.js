var mongoose = require('mongoose');

var dealsSchema = new mongoose.Schema
({
  venmoUsername: String,
  credits: Number,
  dollars: Number,
  ihave: String
});

module.exports = mongoose.model('Deals', dealsSchema);