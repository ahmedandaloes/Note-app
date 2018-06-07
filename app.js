
console.log('Starting app.js ...');

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
const argv = yargs.argv;
var command = process.argv[2];
var command = argv._[0];
console.log('command : ' + command);
console.log('process',process.argv);
console.log('yargs',yargs.argv);

if (command === 'add'){
    notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
    notes.getAll(argv.title);
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('command not reconiz');
}

