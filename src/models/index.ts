import { configDB } from "../config/db.config";
import { Sequelize } from "sequelize";
import { User, UserGoogleSSO } from "./user.model";
import { ExerciseLog } from "./exercise.model";

const {DB, USER, PASSWORD, HOST, pool} = configDB

//@ts-ignore
const sequelize = new Sequelize(DB, USER, PASSWORD, { host: HOST, dialect: 'postgres', pool })

const db:any = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = User(sequelize, Sequelize)
db.exercise = ExerciseLog(sequelize, Sequelize)
db.users_google = UserGoogleSSO(sequelize, Sequelize)

export { db }