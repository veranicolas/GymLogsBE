
export const User = (sequelize:any, Sequelize:any) =>{
    const User = sequelize.define("user",{
        id:{
            type:Sequelize.UUID,
            primaryKey:true
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

