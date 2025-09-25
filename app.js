//Core Module
const path = require("path");

// External Module
const express = require("express");

//Local module
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/errors");

const app = express();

app.set ('view engine','ejs');
app.set ('views','views');
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir,'public')))

app.use(errorsController.PageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
