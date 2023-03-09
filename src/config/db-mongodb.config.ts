import mongoose from "mongoose";

const connectionDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/exercise-logs')
}

export { connectionDB }