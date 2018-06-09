console.log('Starting notes.js ...');
const fs = require('fs');


var fatchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
   return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};


var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};



var addNote = (title, body) => {
  var notes = fatchNotes();
  var note = {
    title,
    body,
  };
 
  var duplicateNotes = notes.filter((note) => note.title === title);
if (duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
}
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  // console.log('Removing note', title);
  // fatch notes
  // filter notes, removing the one with title of argumant 
  // save new notes array 
  var notes = fatchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};





/*
module.exports.addNote = () => {
    console.log('addNote!');
    return 'New Note!';
}

module.exports.add = (a, b) => {
    return a + b;
}
*/
