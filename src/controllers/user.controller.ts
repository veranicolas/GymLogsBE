import { Request, Response } from "express"
import { db } from "../models/pg"

const userController:any = {}
const User = db.users

userController.create = async (req:Request, res:Response) =>{

    try{
        const user = await User.create({name: req.body.name, email:req.body.email, password:req.body.password})
        return res.status(201).send({msg:'User created', user})
    } catch(error:any){
        return res.status(500).send({msg:'Server error', error})
    }
}

userController.login = async (req:Request, res:Response) =>{

    try{

    } catch(e){
        
    }
}

export { userController }