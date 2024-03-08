const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.get('/', function (req, res) {
  // console.log(req);
  // const headers = req.headers;
  // res.send('Hello World')
  // res.send(headers);
  res.json({message:"hello zitto hello"});
})

app.get('/contacts', (req, res)=>{
  // const query = req.query;
  // res.status(200).send(query)
  const fullpath = path.join(__dirname, 'data', 'list.pdf')
  console.log(fullpath)
  res.sendFile(fullpath)
})

app.post('/contacts', (req, res)=>{
  res.status(201).send("create contacts")
})

app.delete('/contacts/:id',(req, res)=>{
  console.log(req.params.id);
  res.status(200).send(`Delete Contact for Id : ${req.params.id}`);
})

app.listen(port, ()=>{
  console.log(`${port}번 포트에서 서버 실행중`);
})