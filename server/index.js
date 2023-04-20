import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import Connection from './Database/Connection.js';
import bodyParser from 'body-parser';
import router from './Routes/route.js';

const app = express();
dotenv.config()


app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

// app.use('/',router)

// console.log("Working")

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.use('/',router)

Connection(USERNAME,PASSWORD)
app.listen(8000)