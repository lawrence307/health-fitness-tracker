"displays list of active goals"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoalList = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get('/api/goals');
        setGoals(response.data);
      } catch (error) {
        console.error('Error fetching goals', error);
      }
    };
    fetchGoals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/goals/${id}`);
      setGoals(goals.filter(goal => goal._id !== id));
    } catch (error) {
      console.error('Error deleting goal', error);
    }
  };

  return (
    <div>
      <h2>Active Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal._id}>
            {goal.description} - {goal.targetDate}
            <button onClick={() => handleDelete(goal._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
