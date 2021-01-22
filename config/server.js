/** importar o módulo do framework express*/
const express = require('express');

/**importar o módulo do body-parser*/
const bodyParser = require('body-parser');

/** importando o consing para gerencias os arquivos */
const consign = require('consign')

const server = express();
server.use(bodyParser.json());

consign()
    .include('controllers')
    .into(server)

server.get('/hello', (req, res) =>{
    res.send('Olá Mundo!!!')
})

module.exports = server;
