"create the goal controllers"

const Goal = require('../models/Goal');

exports.setGoal = async (req, res) => {
  const { description, targetDate } = req.body;
  try {
    const goal = new Goal({
      userId: req.user.id,
      description,
      targetDate,
    });
    await goal.save();
    res.json(goal);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
