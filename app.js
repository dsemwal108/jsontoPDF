const express=require('express');
const app=express();
const router=require()

app.use(express.json());
app.use(router);

app.listen(8000, function(){
    console.log("server is running at port 3000");
})