// var obj = {
// name: "Brady"
// }
//turns object to string
// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Brady", "Age": 17}';
// //converst string to object
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
//
// //store string in a files


const fs = require('fs');

var originalNote = {
  title: "Some Title",
  body: "Some Body"
}

//original note stringObj
var originalNoteString= JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

note = JSON.parse(noteString);

//note
console.log(typeof note);
console.log(note.title);
