
const configDB = {
    HOST:'localhost',
    USER:process.env.USER,
    PASSWORD:process.env.PASSWORD,
    DB:process.env.DATABASE,
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}

export { configDB }