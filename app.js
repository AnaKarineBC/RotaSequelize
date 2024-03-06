const express = require("express")
const app = express()

const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    }
})

//Agendamentos.sync({force: true})

app.listen(8081, function(){
    console.log("Servidor ativo")
})

app.get("/", function(req, res){
    console.log("Página principal")
    res.send("Primeira página")
})

app.get("/cadastrar", async function(req, res) {
    console.log("Página cadastrada")
    res.send("Primeira cadastrada")
    
    Agendamentos.create({
        nome: "Jeferson Roberto de Lima",
        endereco: "Av Aguia de Haia, 2500",
        bairro: "Jd São Nicolau",
        cep: "08390-000",
        cidade: "São Paulo",
        estado: "SP"
    })
  });
  