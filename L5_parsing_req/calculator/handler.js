const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head><title> Practice set </title></head>
      <body>
      <h1> 404 Page not Exist </h1>
      <h1> Welcome to Calculator</h1>
      <a href="/calculator">Go to Calculator</a>
      </body>
   </html>
   `);
    return res.end( );
   }else if (req.url.tolowerCase( ) === "/calculator"){
        res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head><title> Practice set </title></head>
      <body>
      <h1> 404 Page not Exist </h1>
      <h1> Here is the calculator</h1>
      <form action ="/calculate-result" method="POST">
      <input type="text" placeholder=" first number" name = "first"/><br><br>
      <input type="text" placeholder=" Second number" name ="second"/><br><br>
      <input type="submit" value ="SUM">
         </form>

      </body>
   </html>
   `);
    return res.end();
   }
};

exports.requestHandler = requestHandler;
