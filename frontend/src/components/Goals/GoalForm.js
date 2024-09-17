"component that handles input of setting goals"

import React, { useState } from 'react';
import axios from 'axios';

const GoalForm = () => {
  const [goal, setGoal] = useState({ description: '', targetDate: '' });

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/goals', goal);
      alert('Goal set successfully!');
    } catch (error) {
      console.error('Error setting goal', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" placeholder="Goal description" value={goal.description} onChange={handleChange} required />
      <input name="targetDate" type="date" value={goal.targetDate} onChange={handleChange} required />
      <button type="submit">Set Goal</button>
    </form>
  );
};

export default GoalForm;
