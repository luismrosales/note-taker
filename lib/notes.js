const path = require("path");

function createNote(body, notesArray) {
  const newNote = body;
  notesArray.push(newNote);
  FileSystem.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return newNote;
}

module.exports = { createNote };
