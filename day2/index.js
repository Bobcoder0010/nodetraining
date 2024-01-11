const express =require('express');
const { testFunction } = require('./controller/testclass2controller');
const { evennumber } = require('./controller/even');
 const {multipleof2} = require('./controller/multipleof2')
const app = express ();

const db = require('./model/index.js')
db.sequelize.sync({force:false})

app.get ("/controller", evennumber);
 
let PORT = 5000 ;

app.listen(PORT,()=>{
    console.log(`server is started in ${PORT}`);
});

