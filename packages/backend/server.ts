import express from "express";
import { QueryPayload } from "@neibor/models";
const app = express();
const port = 3001;

app.get("/data", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const data: QueryPayload = { foo: "bar" };
  res.json(data);
});

app.listen(port, () => {
  console.log(`App listening on  http://localhost:${port}`);
});
