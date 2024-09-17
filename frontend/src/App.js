"the main application for routing and structure"

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExerciseForm from './components/Exercises/ExerciseForm';
import ExerciseList from './components/Exercises/ExerciseList';
import GoalForm from './components/Goals/GoalForm';
import GoalList from './components/Goals/GoalList';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/exercises" element={<ExerciseForm />} />
          <Route path="/exercise-list" element={<ExerciseList />} />
          <Route path="/goals" element={<GoalForm />} />
          <Route path="/goal-list" element={<GoalList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
