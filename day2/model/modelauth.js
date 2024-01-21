module.exports = (sequelize,Sequelize)=>{
    const Auth = sequelze.define("auth",{
        email:{
            type : Sequelize.STRING,
        },
        password:{
            type:Sequelize.STRING,
        },
    });
}