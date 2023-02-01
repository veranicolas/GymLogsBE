
/* type typeOfExercise = 'upper' | 'middle' | 'lower'
type unit = 'kilogram' | 'pound'

type ExerciseLog = {
    id:number,
    name:string,
    area: typeOfExercise,
    value: number,
    unit: unit,
    date_created: string,
    userId: number
} */

export const ExerciseLog = (sequelize:any, Sequelize:any) =>{
    const ExerciseLog = sequelize.define("exercise_log",{
        id:{
            type:Sequelize.UUID,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING(50)
        },
        value:{
            type:Sequelize.INTEGER
        },
        area:{
            type:Sequelize.STRING(10)
        },
        unit:{
            type:Sequelize.STRING(10)
        },
        userId:{
            type:Sequelize.UUID
        }
    }) 

    return ExerciseLog
} 

