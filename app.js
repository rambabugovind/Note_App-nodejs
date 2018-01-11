

//To view inbuilt modules of node js goto: www.nodejs.org/api

const fs = require('fs');//fs is an inbuilt module in node js to access local file system
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const ext = require('./ext.js');

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of the note',
      demand: true,//means its mandatory to mention the title in cli.
      alias: 't'
    },
    body: {

    }
  })
  .help()
  .argv;
var user = os.userInfo();
//var res = ext.add(-1,3);
var arr = _.uniq(['Ram',1,'ram','1','Ram']);
var command = argv._[0];//process.argv[2];

console.log(argv);

if(command === 'add') {
  var note = ext.addNote(argv.title, argv.body);
  if(typeof note != 'undefined') console.log("Note added",note);
  else console.log("Error while adding note");
}
else if(command === 'list') {
  var all_notes = ext.list();
  console.log(`Printing ${all_notes.length} note(s).`);
  all_notes.forEach((note) => console.log(note));
}
else if(command === 'read') {
  var note = ext.read(argv.title);
  if(note.length !== 0) console.log("Note read:",note);
  else console.log("Note not read as its not found");
}
else if(command === 'remove') {
  var bool = ext.remove(argv.title);
  var msg = bool ? 'Note removed' : 'No Note removed';
  console.log(msg);
}
else {
  console.log("Invalid command");
}


//console.log(_.isString(true));
//console.log(_.isString('true'));
//console.log(process.argv);//process.argv used to get input command line args
//console.log(arr);
//console.log(res);
//console.log(`Hello ${user.username}!, You are ${ext.age} years old.`);
//---------------------------------
//To import 3rd party modules:
// 1.Run npm init from inside the node project folder and answer the queries => creates package.json file inside node proj folder
// 2.Run npm install lodash --save  => install lodash module to our project and --save to update package.json
// 3.While saving your proj in Github or sendin it to friends, delete node_modules folder which you reinstall by typin "npm install" from inside the folder
//---------------------------------
//Predefined Variables: module, global & process
//fs.appendFileSync('sample.txt',`Hello ${user.username}!`);//if file sample.txt is already there this just appends, otherwise it creates new file
//os.userInfo used to see many details about logged in user such as user name

//installed nodemon globally using: npm install nodemon -g => used to display updated op in cli
