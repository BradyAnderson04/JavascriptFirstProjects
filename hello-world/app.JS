console.log("Starting app.JS");
// external resources
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
// my files
const notes = require('./notes.js');
//testing purposes and Variables
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs.argv', argv);
//logic
if(command == 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note Created');
    console.log('---');
    console.log('Title: ' +  note.title);
    console.log('Body: ' +  note.body);
  }else{
    console.log('Note title taken');
  }
} else if(command == 'list'){
  notes.getAll();
} else if(command == 'read'){
  notes.getNote(argv.title);
} else if(command == 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not Found';
  console.log(message);
} else{
  console.log('Command Not Recognized');
}
