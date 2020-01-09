const express=require('express');
const app=express();

const port =8000;

/*const expressLayouts= require('express-ejs-layouts');

const db=require('./config/mongoose');



app.use(express.urlencoded());
// middleware for app to use assets


app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and script from sub pages into the layout

app.set('layout extractStyles',true);

app.set('layout extractScripts',true);

     // middleware : use express router 
app.use('/',require('./routes/index'));

  //seting up view engine

app.set('view engine','ejs');
app.set('views' ,'./views');

*/
app.listen(port,function(err){
    if (err)
    {
       // console.log('error',err);
       // we could have used above method but we are using interpolation
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is up and running at port : ${port}`);
});