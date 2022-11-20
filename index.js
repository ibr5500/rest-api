import express from "express";
import routes from "./src/routes/routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const port = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/rest-apidb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Node & express runing on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});
