import express, { Express } from "express";
import 'dotenv/config'

const app:Express = express()
app.use(express.json())

export { app }