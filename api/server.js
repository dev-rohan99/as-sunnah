// external modules import
import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import colors from 'colors';
import cors from "cors";
import cookieParser from 'cookie-parser';
import mongoDBConnect from './config/db.js';
import userRouter from './routes/userRouter.js';
import errorHandler from './middlewares/common/errorHandler.js';

// implement modules
const app = express();
dotenv.config();

// middlewares implement
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors());
app.use(cookieParser());

// mongoDB Connection
mongoDBConnect();

// routes implement
app.use('/api/v1/user', userRouter);

// error handler
app.use(errorHandler);

// running server
const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server running on ${PORT} PORT!`.bgGreen.black);
    }
});


