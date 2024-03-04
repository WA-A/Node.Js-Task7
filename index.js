import express from'express';
import connectDB from './DB/Connection.js';
import Appinit from './src/Modules/Auth/Controller/App.Router.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const PORT = process.env.PORT;

connectDB();
Appinit(app,express);



app.listen(PORT,()=>{
    console.log(`server is running ..... ${PORT}`);
    });