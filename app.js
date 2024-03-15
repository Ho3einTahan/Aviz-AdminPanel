const express=require('express');
const bodyParser = require("body-parser");


const { setStatics } = require("./utils/statics");
const app = express();

// .ENV CONFIG
require('dotenv').config();


//Middlewares
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));
//End of middleware

//Statics
setStatics(app);

//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS




app.use('/users',require('./routes/user'));

app.get('/admin',(req,res)=>{

  res.render('index3');

});

app.listen(3000,()=>{
  console.log('Server is Runing on Port 3000');
});

