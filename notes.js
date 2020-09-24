const fs = require("fs");
const chalk= require('chalk')
const { threadId } = require("worker_threads");
const getnotes =  () => {
  return "Your Notes..";
};

const addNote = (title, body)=> {
  const notes = loadnotes();
//   const duplicatenotes = notes.filter( (note)=>  note.title === title) // it will return true if the title in function argument matches with some title already stored in json file
const duplicatenote=notes.find((note)=>note.title === title )

 debugger

  if (!duplicatenote) {
    notes.push({
      title: title,
      body: body,
    });
    savenotes(notes);
    console.log(chalk.inverse.green("new note added"))
  } else {
    console.log(chalk.inverse.red("title already taken"))
  }
};

const removenote =  (title)=> {
  const notes = loadnotes();
  const notestokeep= notes.filter( (note) =>note.title !== title // it will return false if the title in function argument matches with some title already stored in json file
  )

  if(notestokeep.length===notes.length)
  console.log(chalk.inverse.red('no note found'));
  else
  {
    console.log(chalk.inverse.green('note removed'));
    savenotes(notestokeep)
  }
  
  
  
  // it will store all the remaining notes which donot have a title matching
};


const savenotes =  (notes)=> {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadnotes =  () =>{
  try {
    const databuffer = fs.readFileSync("notes.json");
    const datajson = databuffer.toString();
    return JSON.parse(datajson);
  } catch (e) {
    // console.log('iwork')
    return [];
  }
};
const listnote= ()=>
{
    notes= loadnotes()
    console.log(chalk.inverse.green('Your Notes'))
    notes.forEach(note => {
        console.log(note.title)
    });
}
const readnote= (title)=>
{
    notes= loadnotes()
    foundnote= notes.find((note)=> note.title=== title)
    if(foundnote)
    {
        console.log(chalk.inverse.white(foundnote.title) +" "+ foundnote.body)
        
    }
    else{
        console.log(chalk.inverse.red("not found"))
    }
}

module.exports = {
  getnotes: getnotes,
  addNote: addNote,
  removenote: removenote,
  listnote: listnote,
  readnote:readnote
};
