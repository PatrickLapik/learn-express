import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/answer", (req, res) => {
  res.send(req.query);
});

app.post("/answer", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
