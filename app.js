// console.log('Starting app.js ...');
const fs = require('fs');
// const os = require('os');
const  _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
/*
var user = os.userInfo();

var res = notes.addNote();
console.log(res);


fs.appendFileSync('greeting.txt',`hello ${user.username}! You are ${notes.age}`, function (err) {
    if (err){
        console.log('unable to write to file');
    }
});

var test = notes.add(1, 2);
console.log(test);
console.log(`Result: ${notes.add(4, 12)}`);
var a = _.isString(true);
var b = _.isString('ahmed');
var uniq = _.uniq([1,1,2,2,3,3]);
console.log(a + ' ' + b + ' ' + uniq);
*/
const titleOptions = {
    describe: "title of note",
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: "body of note",
    demand: true,
    alias: 'b'

};
const argv = yargs
.command('add','add new note',{
    title: titleOptions,
    body: bodyOptions
})
.command('list','all notes lists')
.command('read',"read one note",{
    title: titleOptions,
    body: bodyOptions
})
.command('remove','remove one note',{
    title: titleOptions,
    body: {
        bodyOptions,
        demand:false
    }
})
.help()
.argv;

var command = process.argv[2];
var command = argv._[0];
// console.log('process',process.argv);
// console.log('yargs',yargs.argv);

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        console.log('--');
        console.log(`Title : ${note.title}`);
        console.log(`Body  : ${note.body}`);
    } else {
        console.log('note title taken');
    }
} else if (command === 'list'){
    var allNotes = notes.getAll(argv.title,argv.body);
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        console.log('--');
        console.log(`Title : ${note.title}`);
        console.log(`Body  : ${note.body}`);
    } else {
        console.log('note not found');
    }
} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note not Founded';
    console.log(message);
} else {
    console.log('command not reconiz');
}

