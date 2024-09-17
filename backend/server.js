const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const goalRoutes = require('./routes/goalRoutes');
const { protect } = require('./middleware/authMiddleware');

const app = express();

// Connect Database
connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/exercises', protect, exerciseRoutes);
app.use('/api/goals', protect, goalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
