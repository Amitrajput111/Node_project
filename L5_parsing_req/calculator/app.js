const http = require ('http');
const {requestHandler} = require('./handler');
const server = http.createServer();

const PORT = 3000;
server.listen (PORT, () =>{
  console.log(`Server runing on addresss http://localhost:${PORT}`);
})
