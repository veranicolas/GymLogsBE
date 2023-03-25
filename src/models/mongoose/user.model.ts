import mongoose, { Schema } from "mongoose";

type Language = 'EN' | 'ES'

type User = {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    country: string,
    weight: number,
    photo: string,
    language: Language
}

const userSchema = new Schema<User>(
    {
        name:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required:true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password:{
            type:String,
            required:true
        },
        country:{
            type: String,
            required: true,
        },
        weight:{
            type: Number,
            required:true
        },
        photo:{
            type: String,
            default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
        },
        language:{
            type: String,
            default:'ES'
        }
    },{
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export { User }