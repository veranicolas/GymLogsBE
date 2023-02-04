import { Model } from 'sequelize'

const User = (sequelize:any, Sequelize:any) =>{
    const User:Model = sequelize.define("user",{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type:Sequelize.STRING(50)
        },
        email:{
            type:Sequelize.STRING(60)
        },
        password:{
            type:Sequelize.STRING
        }
    }) 

    return User
} 

// different model for users that used the google sso
const UserGoogleSSO = (sequelize:any, Sequelize:any) =>{
    const UserGoogleSSO:Model = sequelize.define("user_google",{
        id: {
            type: Sequelize.STRING(50),
        }
    }) 

    return UserGoogleSSO
} 

export { User, UserGoogleSSO}

