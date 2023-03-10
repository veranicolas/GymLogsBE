import mongoose from "mongoose";

const database = process.env.MONGODB_URL || 'mongodb://localhost:27017/exercise-logs'

const connectionDB = async () =>{
    await mongoose.connect(database)
}
 
export { connectionDB }