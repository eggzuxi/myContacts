require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const checkLogin = async(req, res, next)=>{
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const token = req.cookies.token;
  if(!token){
    return res.redirect("/");
  }
  try{
    const decoded = jwt.verify(token,jwtSecret);
    req.username = decoded.username;
    next();
  }catch(error){
    return res.status(401).json({message:"try login"});
  }
}

module.exports = {checkLogin};