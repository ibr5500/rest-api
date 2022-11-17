import express from "express";
import routes from "./src/routes/routes";

const app = express();

const port = 3000;

routes(app);

app.get("/", (req, res) => {
  res.send(`Node & express runing on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});
