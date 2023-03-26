import { Request, Response } from "express"
import { User } from "../models/mongoose/user.model"
import bcrypt from 'bcrypt'

const userController:any = {}

userController.create = async (req:Request, res:Response) =>{

    try{
        bcrypt.hash(req.body.password, 10, async (error, hash)=>{
            if(!error){
                const user = await User.create(
                    {
                        name: req.body.name, 
                        lastName: req.body.lastName,
                        email:req.body.email, 
                        password: hash,
                        country: req.body.country,
                        weight: req.body.weight,
                    })

                return res.status(201).send({msg:'User created', user})
            }
        })
    } catch(error:any){
        return res.status(500).send({msg:'Server error', error})
    }
}

userController.login = async (req:Request, res:Response) =>{

    try{
        const user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(404).send({msg:'User not found'})
        } else {
            const compareResult = await bcrypt.compare(req.body.password, user.password)
            if(compareResult){
                return res.status(200).send({msg:'Logged in', result:'allowed'})
            } else {
                return res.status(401).send({msg:'Invalid credentials'})
            }
        }
    } catch(error){
        return res.status(500).send({msg:'Error', error})
    }
}

export { userController }