import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(`Node & express runing on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});
