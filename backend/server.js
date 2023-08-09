import express from 'express';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDb } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
// calling the express function
const app = express();
// config dotenv
dotenv.config();
// connect db
connectDb();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res) => {
  // Corrected the order of parameters (req, res)
  res.send('<h1>Welcome to Hafiz Pizza</h1>');
});

// port
const PORT = process.env.PORT || 8080;

// run listen port
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV}   on Port ${PORT}`.bgBlue.white
  );
});
