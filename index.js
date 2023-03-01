const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')

let users = [{
    id:0,
    name:"Rayane dos Anjos",
    phone:"(223)54321"
},
    {   id:1,
        name: "Max Oliveira",
        phone: "(223)54321"
    },
{       id:2,
        name: "Kelly Oliveira",
        phone: "(223)54321"
    },
    {
        id: 3,
        name: "Antônio dos Anjos",
        phone: "(223)54321"
    },
    ]

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get("/", (req, res)=>{

    res.render('user', {users})
})

app.get("/about", (req, res)=>{
    res.render('about')
    
})

app.listen(3000, () =>{
    console.log("server Running on 3000")
})