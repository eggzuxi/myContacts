const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
  res.send("시러시러");
})

app.use("/contacts", require('./contectRoutes'));

app.listen(port, ()=>{
  console.log("서버 스타트")
});