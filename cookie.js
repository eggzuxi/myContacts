const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;
app.use(cookieParser());

app.get("/",(req, res)=>{
  res.cookie("yoon","0604",{httpOnly:true});
  res.send("내가만든쿠키");
})

app.get("/cookie",(req, res)=>{
  console.log(req.cookies.yoon);
})

app.get("/delete-cookie", (req, res)=>{
  res.clearCookie("yoon");
  res.send("cookie deleted")
})

app.listen(port, ()=>{
  console.log("start server");
})