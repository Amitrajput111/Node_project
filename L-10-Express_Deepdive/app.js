const express = require('express');
const bodyParser = require('body-parser')
//Local modules
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRoutes');

const app = express();

app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
