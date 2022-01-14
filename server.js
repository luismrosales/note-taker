const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { db } = require("./Develop/db/db.json");
const fs = require("fs");
const req = require("express/lib/request");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

fs.readFile("notes.html", (err, data) => {
  console.log(data);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
