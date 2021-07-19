const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

console.log(chalk.green("Success!"));
console.log(chalk.blue.bgRed.bold("Hello world!"));
console.log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));
console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);
console.log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);
