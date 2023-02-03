import * as dotenv from 'dotenv'
dotenv.config()
import express, { Express } from "express";
import { db } from "./models";
import { router as userRoutes } from './routes/user.routes';

const app:Express = express()

app.use(express.json())
app.use(userRoutes)

db.sequelize.sync({force: true})
    .then(()=>{
        console.log('Synced db')
    }) 
    .catch((err:any)=>{
        console.log('Database error', err)
    })

export { app }