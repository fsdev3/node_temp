import contacts from "../../../myapp/contacts_db/contacts.js";
import express from "express";

const contactsRouter = express.Router();

contactsRouter.get("/", (req, res) => {
  res.json(contacts);
});

contactsRouter.get("/:id", (req, res) => {
  res.json(contacts[0]);
});

contactsRouter.post("/", (req, res) => {
  res.json(contacts[0]);
});

contactsRouter.put("/:id", (req, res) => {
  res.json(contacts[0]);
});

contactsRouter.delete("/:id", (req, res) => {
  res.json(contacts[0]);
});

export default contactsRouter;
