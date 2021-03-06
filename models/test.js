const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  score: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamp: { type: Date, default: Date.now},
})

module.exports = mongoose.model('Answer', answerSchema);