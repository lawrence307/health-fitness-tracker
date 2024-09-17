"creates the exercise logins necessary"

const Exercise = require('../models/Exercise');

exports.logExercise = async (req, res) => {
  const { type, duration, date, calories } = req.body;

  try {
    const exercise = new Exercise({
      userId: req.user.id,
      type,
      duration,
      date,
      calories,
    });
    await exercise.save();
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ userId: req.user.id });
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
