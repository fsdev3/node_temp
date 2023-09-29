import express from "express";
// const myRouter = require("./my-router");
const app = express();
import contacts from "./contacts_db/contacts.js";

app.get("/contacts", (req, res) => {
  //   res.send(contacts);
  res.json(contacts);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

// app.get("/contact/:id", (req, res) => {
//   res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });

// app.use("/my-router", myRouter);

// app.all("/anything", (req, res, next) => {
//   console.log("Anything method.");
//   next(); // передаем управление дальше
// });

// app
//   .route("/blog")
//   .get((req, res) => {
//     res.send("Get a list of blog");
//   })
//   .post((req, res) => {
//     res.send("Add a record to blog");
//   })
//   .put((req, res) => {
//     res.send("Update blog");
//   });
