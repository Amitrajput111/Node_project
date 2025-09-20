const express = require('express');
const bodyParser = require('body-parser')
//Local modules
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use (homeRouter);
app.use (contactRouter);
app.use (express.urlencoded());


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on sddress http://localhost:${PORT}`);
});
