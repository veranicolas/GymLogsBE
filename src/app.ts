import * as dotenv from 'dotenv'
dotenv.config()
import express, { Express } from "express";
import { db } from "./models";
import { router as userRoutes } from './routes/user.routes';
import { router as exerciseRouter } from './routes/exercise.routes'
import cors from 'cors'

const app:Express = express()

app.use(express.json())
app.use(userRoutes)
app.use(exerciseRouter)
app.use(cors({
    origin:'*'
}))

db.sequelize.sync({force: true})
    .then(()=>{
        console.log('Synced db')
    }) 
    .catch((err:any)=>{
        console.log('Database error', err)
    })

export { app }