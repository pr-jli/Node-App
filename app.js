const notes = require("./notes.js");

// const validator=require('validator')
const chalk = require("chalk");
const yargs = require("yargs");
const { argv, demandOption } = require("yargs");

// console.log(chalk.red.inverse.bold('success'))
// const getnt =require('./notes.js')

// // fs.writeFileSync('notes.txt','this file was created by pranjali');
// const msg= getnt()
// console.log(msg)
// // console.log(validator.isURL('pk@example.com'))
// console.log(process.argv)

// console.log(process.argv)

// yargs.version('1.1.0')

// add , remove , read , list

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: " note title",
      demandOption: true, //for required option
      type: "string", // type of default input we want
    },
    body: {
      describe: "description of body",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) //fucntion executed when command is run
  {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
      describe: "note to be deleted",
      demandOption: "true",
      type: "string",
    },
  },
  handler(argv) //fucntion executed when command is run
  {
    notes.removenote(argv.title)
  },
});

yargs.command({
  command: "read",
  describe: "reading a new note",
  builder: {
    title: {
      describe: "note to be searched",
      demandOption: "true",
      type: "string",
    },
  },
  handler(argv) //fucntion executed when command is run
  {
    notes.readnote(argv.title)
  },
});

yargs.command({
    command: "list",
    describe: "veiwing all nodes",
    handler() //fucntion executed when command is run
    {
      notes.listnote();
    },
  });

yargs.parse();
// console.log(yargs.argv)
