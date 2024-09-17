"route for the exercises completed"

const express = require('express');
const { logExercise, getExercises } = require('../controllers/exerciseController');
const router = express.Router();

router.post('/', logExercise);
router.get('/', getExercises);

module.exports = router;
