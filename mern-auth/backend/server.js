import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import stlRoutes from './routes/stlRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


//Routes
app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', userRoutes);

app.use('/api/model', stlRoutes);


//Middleware
app.use(notFound);
app.use(errorHandler);


//Start Listen
app.listen(port, () => console.log(`Server started on port ${port}`));