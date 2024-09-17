"component responsible for display list of logged exercises"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('/api/exercises');
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises', error);
      }
    };
    fetchExercises();
  }, []);

  return (
    <div>
      <h2>Logged Exercises</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise._id}>
            {exercise.type} - {exercise.duration} mins - {exercise.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
