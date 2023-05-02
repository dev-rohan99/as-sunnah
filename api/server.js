// external modules import
import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import colors from 'colors';
import path from "path";
import cors from "cors";
import cookieParser from 'cookie-parser';
import mongoDBConnect from './config/db.js';
import userRouter from './routes/userRouter.js';
import errorHandler from './middlewares/common/errorHandler.js';

const __dirname = path.resolve();

// implement modules
const app = express();
dotenv.config();

// middlewares implement
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors({
    origin : "https://as-sunnah.netlify.app",
    credentials : true
}));
app.use(cookieParser());

// mongoDB Connection
mongoDBConnect();

// static folder
app.use('/', express.static(path.join(__dirname, '/api/public')))

// routes implement
app.use('/api/v1/user', userRouter);

// error handler
app.use(errorHandler);

// running server
const PORT = process.env.SERVER_PORT;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server running on ${PORT} PORT!`.bgGreen.black);
    }
});


