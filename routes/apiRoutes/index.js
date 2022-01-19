const express = require("express").Router();
const notes = require("../../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.get("/notes", (req, res) => {
  if (notes) {
    res.json(notes);
  } else {
    res.json("No notes yet!");
  }
});

app.post("/notes", (req, res) => {
  const addNote = req.body;
  addNote.id = uuidv4();
  notes.push(addNote);
  fs.writeFile(
    __dirname + "../../db/db.json",
    JSON.stringify(notes),
    function (e) {
      if (e) throw error;
    }
  );
  res.end;
});

module.exports = app;
