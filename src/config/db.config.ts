
// const configDB = {
//     HOST:process.env.HOST,
//     USER:'postgres',
//     PASSWORD:process.env.DATABASE_PASS,
//     DB:process.env.DATABASE_URL,
//     dialect:'postgres',
//     pool:{
//         max:5,
//         min:0,
//         acquire:30000,
//         idle:10000
//     }
// }

const configDB = {
    HOST:'34.136.166.199',
    USER:'postgres',
    PASSWORD:'pastafrola123',
    DB:'exercise-logs-db-dev',
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}

export { configDB }