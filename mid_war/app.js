import express from "express";
import contacts from "../myapp/contacts_db/contacts.js";
import moment from "moment";
import fs from "fs/promises";

const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./server.log", `\n${method} ${url} ${date}`);
  next();
});

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.listen(3000, () => console.log("Server running at 3000 PORT"));
