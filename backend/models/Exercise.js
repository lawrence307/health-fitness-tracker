"exercise schema for the backend"

const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  calories: { type: Number, required: true },
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
