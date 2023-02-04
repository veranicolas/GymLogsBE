import { Request, Response } from "express"
import { db } from "../models"

const exerciseController:any = {}
const Exercise = db.exercise

exerciseController.create = async (req:Request, res:Response) =>{

    try{
        const exercise = await Exercise.create({
            name: req.body.name, 
            value:req.body.value, 
            area:req.body.area, 
            unit:req.body.unit, 
            userId:req.body.userId
        })
        return res.status(201).send({msg:'Exercise created', exercise})
    } catch(error:any){
        return res.status(500).send({msg:'Server error', error})
    }
}

export { exerciseController }

