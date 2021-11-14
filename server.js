const express = require("express");
const app = express();
const { db } = require("./Develop/db/db.json");

app.get("/api/notes", (req, res) => {
  let results = db;

  res.json(results);
});

app.listen(3001, () => {
  console.log(`API server now on port 3001`);
});
