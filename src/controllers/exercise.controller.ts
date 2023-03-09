import { Request, Response } from "express"
import { Exercise } from "../models/mongoose/exercise.model"

const exerciseController:any = {}

exerciseController.create = async (req:Request, res:Response) =>{

    try{
        const exercise = await Exercise.create({
            name: req.body.name, 
            value:req.body.value, 
            area:req.body.area, 
            unit:req.body.unit, 
            reps:req.body.reps,
            userId:req.body.userId
        })
        return res.status(201).send({msg:'Exercise created', exercise})
    } catch(error:any){
        return res.status(500).send({msg:'Server error', error})
    }
}

exerciseController.getAll = async (req:Request, res:Response) =>{

    try{
        const exercises = await Exercise.find({userId: req.params.id})

        if(!exercises || exercises.length == 0){
            return res.status(404).send({msg:'No exercises found', exercises})
        }
        return res.status(200).send({msg:`Displaying ${req.params.id} exercises`, exercises})
    } catch(error){
        return res.status(500).send({msg:'Something went wrong', error})
    }
}

export { exerciseController }

