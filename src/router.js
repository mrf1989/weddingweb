import express from "express";
import contactView from "./views/contact.js";
import indexView from "./views/index.js";
import guestsView from "./views/guests.js";
import { registerNewGuestContact, getAllGuests, deleteGuest } from "./services.js";

const router = express.Router();

router
  .get("/", (req, res) => {
    const props = {};
    const response = indexView(props);
    res.send(response);
  })
  .get("/contacto", (req, res) => {
    const props = {};
    const response = contactView(props);
    res.send(response);
  })
  .post("/contacto", async (req, res) => {
    const body = req.body;
    const newGuest = await registerNewGuestContact(body);
    
    if (!newGuest) {
      res.redirect("/");
    } else {
      const response = contactView({ formConfirmation: true });
      res.send(response);
    }
  })
  .get("/guests", async (req, res) => {
    const guests = await getAllGuests();
    const response = guestsView({ guests });
    res.send(response);
  })
  .delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const response = await deleteGuest(id);
    if (response) {
      res.sendStatus(204);
    } else {
      res.sendStatus(500);
    }
  });

export default router;