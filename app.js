const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version

yargs.version('1.2.3')

//add
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'added body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})
//remove
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'this is the remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})
//list
yargs.command({
    command: 'list',
    describe: 'list the note ',
    handler: function(){
        notes.listNotes()
    }
})
//read
yargs.command({
    command: 'read',
    describe: 'reads the note',
    builder: {
        title: {
            describe: 'this is to read',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)

