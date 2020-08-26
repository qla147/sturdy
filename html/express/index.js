const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");

//静态文件目录
app.static("public")
//请求参数解析中间件
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

//view
app.set("view","view");
app.set("view engine","")

//cookie
app.use(cookie_parser());

app.use("/",function (req,res){
    res.send("hello world ! \n Express!")
})



const server = app.listen(3000,function (){
    let host = server.address().address ;
    let port = server.address().port;
    console.log("running at http://  %s : %s",host,port);
})
