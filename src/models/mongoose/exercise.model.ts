import mongoose, { Schema } from "mongoose";

type typeOfExercise = 'upper' | 'middle' | 'lower'
type unit = 'kilogram' | 'pound'

type ExerciseLog = {
    id:number,
    name:string,
    area: typeOfExercise,
    value: number,
    reps: number,
    unit: unit,
    date_created: string,
    userId: string
}

const exerciseSchema = new Schema<ExerciseLog>(
    {
        name:{
            type: String,
            required: true
        },
        area:{
            type: String,
            required:true
        },
        value:{
            type: Number,
            required: true,
            default:0
        },
        reps:{
            type: Number,
            required:true
        },
        unit:{
            type: String,
            required: true,
            default:'kilogram'
        },
        userId:{
            type: String,
            required: true
        }

    },{
        timestamps: true
    }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

export { Exercise }