const app = require('express').Router();
let notesDb = require('../db/db.json')
const fs = require('fs')

app.get('/api/notes',(req, res)=>{
    notesDb = JSON.parse(fs.readFileSync("db/db.json"))
    res.json(notesDb)
})

app.post('/api/notes',(req, res)=>{
    const newNote = {
        id:Math.floor(Math.random()*99989), 
        title: req.body.title,
        text: req.body.text
    }
    notesDb.push(newNote)
    fs.writeFileSync("db/db.json",JSON.stringify(notesDb))
    res.json(notesDb)
})

app.delete('/api/notes/:id',(req, res)=>{
    const newNotes = notesDb.filter(ele => ele.id != req.params.id)
    notesDb = newNotes
    fs.writeFileSync("db/db.json",JSON.stringify(notesDb))
    res.json(notesDb)
})
module.exports = app;