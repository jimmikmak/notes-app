const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is James.");
fs.appendFileSync("notes.txt", " I am 43 years old.");
