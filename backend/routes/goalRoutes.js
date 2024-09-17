"route for the goals set"

const express = require('express');
const { setGoal, getGoals } = require('../controllers/goalController');
const router = express.Router();

router.post('/', setGoal);
router.get('/', getGoals);

module.exports = router;
