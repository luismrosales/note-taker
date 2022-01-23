const router = require("express").Router();
const { notes } = require("../../db/db.json");
const fs = require("fs");
const { createNote } = require("../../lib/notes");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  if (notes) {
    res.json(notes);
  } else {
    res.json("No notes yet!");
  }
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  if (!req.body.id) {
    req.body.id = uuidv4();
  }
  const note = createNote(req.body, notes);
  res.json(note);
});

module.exports = router;
