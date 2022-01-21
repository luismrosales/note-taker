const path = require("path");
const fs = require("fs");

function createNote(body, notesArray) {
  const newNote = body;
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return newNote;
}

module.exports = { createNote };
