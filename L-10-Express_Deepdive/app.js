const express = require('express');
const bodyParser = require('body-parser')
//Local modules
const homeRouter = require ('./routes/homeRouter');

const app = express();

app.use (homeRouter);

app.use((req, res, next) => {
  console.log("First Dummy MidleWare", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy MidleWare");
  next();
});


app.get("/", (req, res, next) => {
  console.log("Handling / for  GET", req.url, req.method);
  res.send(`<h1> Welcome to C Amit </h1>`);
});


app.post ("/contact-us", (req,res,next) => {
    console.log ("First handling", req.url, req.method, req.body);
    next ();
  })
   

app.use (bodyParser.urlencoded());

app.post ("/contact-us", (req,res,next) => {
    res.send (``);
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on sddress http://localhost:${PORT}`);
});
