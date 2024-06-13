const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequeleze = require('sequelize')

// Config

    // Template Engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    // Conexão com Banco de Dados
    
    const sequeleze = new Sequeleze('test','root','',{
        host: "localhost",
        dialect: 'mysql'
    })

// Rotas
    app.get('/cadastro',function(req,res){
    // res.send('ROTA DE CADASTRO DE POSTS')
    res.render('formulario')
})

    app.post('/add', function(req,res){
        res.send('FORMULARIO RECEBIDO')
    })


app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})