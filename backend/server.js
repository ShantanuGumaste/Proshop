import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/middleware.js';

const app = express();

dotenv.config()

connectDB()


app.use('/api/products', productRoutes)

// middleware
app.use(notFound)

app.use(errorHandler)

app.get('/', (req, res) =>{
    res.send('API is running...')
})

const PORT = process.env.PORT || 5000
const environment = process.env.NODE_ENV || "development";
app.listen(
  PORT,
  console.log(`server running on ${environment} mode on port ${PORT}`.yellow.underline)
);