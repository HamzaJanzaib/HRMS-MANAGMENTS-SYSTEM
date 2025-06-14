import express from 'express';
import Cors from 'cors';
import connectDB from './config/ConnectDB.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import helmet from "helmet";
import AuthRoutes from "./routes/Auth.route.js"
dotenv.config();


if (!process.env.MONGO_URI) {
    console.error("MONGO_URL is not defined in the environment variables");
    process.exit(1);
}

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(helmet());
app.use(Cors(
    {
        origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));
app.use(cookieParser());

// api 

app.use('/api/v1/user' , AuthRoutes)


export default app