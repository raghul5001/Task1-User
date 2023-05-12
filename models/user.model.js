module.exports=(sequelize,Sequelize)=>{
    const User = sequelize.define("usermanagement",{
        userName:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        userEmail:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
            valid:{
                notEmpty:true
            }
        },
        phoneNumber:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
            valid:{
                notEmpty:true
            }
        },
        
    },{timestamps:true})
return User
}