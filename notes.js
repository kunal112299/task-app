const fs = require('fs')
const chalk = require('chalk')

const removeNotes = function(title){
    const notes = loadNotes()
    const notestokeep = notes.filter( function(notes){
        return notes.title!== title
    })
    if(notes.length > notestokeep.length){
        console.log(chalk.red.inverse('Note Removed'))
        saveNotes(notestokeep)
    }else{
        console.log(chalk.red.inverse('no note found'))
    }
    
}
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((notes)=>{
        console.log(notes.title)
    })
}
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log((note.body))
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}
const addNote  = function(title, body){
    const Notes = loadNotes()
    const duplicateNotes = Notes.find((Notes) => Notes.title === title)
    if(!duplicateNotes){
        Notes.push({
            title: title,
            body: body
        })
        saveNotes(Notes)
        console.log(chalk.green.inverse('New notes added'))
    }else{
        console.log('note title taken!')
    }
    
}
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
    
}
module.exports = {
    addNote : addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}