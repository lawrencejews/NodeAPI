import express from 'express';
import router from './api/router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';


const app = express()

// Middleware for communication, requests, json objects and urls
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', protect, router)

export default app