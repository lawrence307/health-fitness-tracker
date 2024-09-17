"Handles input for logging exercises"

import React, { useState } from 'react';
import axios from 'axios';

const ExerciseForm = () => {
  const [exercise, setExercise] = useState({
    type: '',
    duration: '',
    date: '',
    calories: ''
  });

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/exercises', exercise);
      alert('Exercise logged successfully!');
    } catch (error) {
      console.error('Error logging exercise', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="type" placeholder="Type" value={exercise.type} onChange={handleChange} required />
      <input name="duration" placeholder="Duration (mins)" value={exercise.duration} onChange={handleChange} required />
      <input name="date" type="date" value={exercise.date} onChange={handleChange} required />
      <input name="calories" placeholder="Calories burned" value={exercise.calories} onChange={handleChange} required />
      <button type="submit">Log Exercise</button>
    </form>
  );
};

export default ExerciseForm;
