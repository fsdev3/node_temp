import express from "express";
import contactsRouter from "./routes/api/contacts_router.js";

const app = express();

app.use("/routes/api/contacts", contactsRouter);

app.listen(3000, () => console.log("port 3000 - server running "));
