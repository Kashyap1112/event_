const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/register', require('./routes/registrationRoutes'));

app.listen(5000, () => console.log("Server running on port 5000"));
