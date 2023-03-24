import { Request, Response } from "express"
import { User } from "../models/mongoose/user.model"

const userController:any = {}

userController.create = async (req:Request, res:Response) =>{

    try{
        const user = await User.create(
            {
                name: req.body.name, 
                lastName: req.body.lastName,
                email:req.body.email, 
                password:req.body.password,
                country: req.body.country,
                weight: req.body.weight,
            })
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