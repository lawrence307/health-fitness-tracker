"goal schema"

const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  targetDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Goal', GoalSchema);
