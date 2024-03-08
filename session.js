const express = require("express");
const session = require("express-session");
const mongoStore = require("connect-mongo")
require("dotenv").config();

const app = express();
const port = 3000;

app.use(session({
  secret:"secret code",
  resave:false,
  saveUninitialized:true,
  store:mongoStore.create({mongoUrl:process.env.DB_LOCAL_URL}),
  cookie:{maxAge:1000*60*60*24},
}))

app.get("/",(req, res)=>{
  if(req.session.count){
    req.session.count++;
    res.send(`${req.session.count}번째 방문입니다.`);
  }else{
    req.session.count = 1;
    res.send(`첫번째 방문입니다. 환영합니다.`);
  }
})

app.get("/session",(req, res)=>{
  res.send(req.session.cookie);
})

app.get("/delete-session", (req, res)=>{
  req.session.destroy((err)=>{
    if(err){
      console.log(err)
    }else{
      res.clearCookie("connect.sid");
      res.send("session deleted");
    }
  });
})

app.listen(port, ()=>{
  console.log("start server");
})