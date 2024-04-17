import express from "express";
import nunjuncks from "nunjucks";
import bodyParser from "body-parser";
import db from "./models/index.js";
const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

app.use(bodyParser.urlencoded({ extended: false }));

nunjuncks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", async (req, res) => {
  console.log(req.query);

  let posts = await db.Post.findAll();

  console.log(posts);

  res.render("index.njk");
});

app.get("/answer", (req, res) => {
  res.render("answer.njk", req.query);
});

app.post("/answer", (req, res) => {
  res.render("answer.njk", { ...req.body, ...req.query });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
