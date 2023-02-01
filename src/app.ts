import * as dotenv from 'dotenv'
dotenv.config()
import express, { Express } from "express";
import { db } from "./models";

const app:Express = express()
app.use(express.json())

db.sequelize.sync({force: true})
    .then(()=>{
        console.log('Synced db')
    }) 
    .catch((err:any)=>{
        console.log('Database error', err)
    })

export { app }