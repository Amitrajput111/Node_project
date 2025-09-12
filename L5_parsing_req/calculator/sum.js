const sumRequestHandler = (req,res) =>{
 console.log("In Sum Request Handler",req.url);
 const body = [];
 req.on('data', chunk =>
 body.push(chunk););
 req.on('end', ()=>{
  const bodyStr = Buffer.concat(body).toString();
  const params = new URLSearchParams(bodyStr);
  const bodyObj = Object.fromEntries(params);
  const result = Number(bodyObj.first) + Number(bodyObj.second;)
  console.log(result);
  res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1> your sum is ${result} </h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First Num" name="first" />
            <input type="text" placeholder="Second Num" name="second" />
            <input type="submit" value="Sum">
          </form>
        </body>  
      <html>  
      `);
      return res.end();

});
 

}

exports.sumRequestHandler = sumRequestHandler;
