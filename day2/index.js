const express =require('express');
const { testFunction } = require('./controller/testclass2controller');
const { evennumber } = require('./controller/even');
// const {multipleof2} = require('./controller/multipleof2')
const app = express ();

app.get ("/about", evennumber);

 
let PORT = 5000 ;

app.listen(PORT,()=>{
    console.log(`server is started in ${PORT}`);
});
