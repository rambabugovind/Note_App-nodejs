

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesStr = fs.readFileSync('notes-data.json');
    return JSON.parse(notesStr);
  } catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title, //same as title:title
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var list = () => {
  return fetchNotes();
};

var read = (title) => {
  var notes = fetchNotes();
  var read_note = notes.filter((note) => note.title === title);
  return read_note;
};

var remove = (title) => {
  var notes = fetchNotes();
  var fileterd_notes = notes.filter((note) => note.title !== title);//for every note in notes, compare each note's title to the title arg in remove() method
  saveNotes(fileterd_notes);
  return notes.length !== fileterd_notes.length;
};

module.exports = {
  addNote, //addNote: addNote => setting obj attribute and value same as setting obj att alone (only when both are same)
  //add,
  list, //in ES6 if u hav a prop. whose value is identical we can use 'prop' instead of 'prop: value'
  read,
  remove
}

//module.exports.age = 25;//either add var/fun to exports array like this or like below

// var add = (a,b) =>
// {
//   console.log('Add function');
//   return a+b;
// };

//Alternative:
// var duplicateNotes = notes.filter((note) => {
//   return note.title === title;
// });
//filter() is an array method that takes a callback which will be called with an argument(note)
//filter() will be called once for every element in the array and returns true/false. If true, then that element is added to duplicateNotes
