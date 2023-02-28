const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')

let users = [{
    name:"Rayane dos Anjos",
    phone:"(223)54321"
},
    {
        name: "Max Oliveira",
        phone: "(223)54321"
    },
{
        name: "Kelly Oliveira",
        phone: "(223)54321"
    }]

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('user', {users})
})
app.listen(3000, () =>{
    console.log("server Running on 3000")
})