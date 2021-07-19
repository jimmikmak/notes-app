const fs = require("fs");
// const book = {
//   title: "Rum Punch",
//   author: "Elmore Leonard",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const person = {
  name: "James",
  age: 43,
};

const personJSON = JSON.stringify(person);
fs.writeFileSync("1-json.json", personJSON);
