import * as dotenv from 'dotenv'
dotenv.config()
import express, { Express } from "express";
import { router as userRoutes } from './routes/user.routes';
import { router as exerciseRouter } from './routes/exercise.routes'
import { connectionDB } from './config/db-mongodb.config';
// import cors from 'cors'

const app:Express = express()

app.use(express.json())
//app.use(userRoutes)
app.use(exerciseRouter)
// app.use(cors({
//     origin:'*'
// }))

connectionDB()
    .then(()=>{
        console.log('DB connected')
    })
    .catch((error)=>{
        console.log('Error:', error)
    })

export { app }