
type typeOfExercise = 'upper' | 'middle' | 'lower'
type unit = 'kilogram' | 'pound'

type ExerciseLog = {
    id:number,
    name:string,
    area: typeOfExercise,
    value: number,
    unit: unit,
    date_created: string,
    userId: number
}