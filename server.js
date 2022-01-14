const express = require("express");
const app = express();
const { db } = require("./Develop/db/db.json");
const fs = require("fs");
const req = require("express/lib/request");

fs.readFile("notes.html", (err, data) => {
  console.log(data);
});

app.get("/api/notes", (req, res) => {
  let results = db;

  res.json(db);
});

app.post("/api/notes"),
  (req, res) => {
    let newNote = db;
    res;
  };

app.delete("api/notes/:id"), (req, res) => {};

app.listen(3001, () => {
  console.log(`API server now on port 3001`);
});
