import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './Config/db.js';
import userRoutes from './routes/user.routes.js';
import watchRoute from './routes/watch.routes.js'

dotenv.config();

const app = express()
// Connect database
connectDB()
// Conncet Middleware
app.use(express.json());
app.use(cors());
// Conncet Router

app.use('/api/user/', userRoutes);
app.use('/api/watches/', watchRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`server is running on port ${PORT}`)
})