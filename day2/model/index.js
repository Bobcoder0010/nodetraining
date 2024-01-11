const Sequelize = require('sequelize');
const dbConfig = require('../dbconfig/dbconfig.js');

const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            accurate: dbConfig.pool.accurate,
            idle: dbConfig.pool.idle,
        },
    }
);
sequelize
.authenticate()
.then(()=>{
    console.log("connected to database successfully");

})

.catch((err) =>{
    console.log(err);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
