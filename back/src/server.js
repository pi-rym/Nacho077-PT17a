const http = require("http")
const url2 = require("url")
const express = require('express')
const server = express()
const router = require('./routes')

const bodyParser = require('body-parser')
const morgan = require('morgan')
const data = require('./utils/data')
const characterController = require("./controllers/getCharacters") // {getCharacterByID: () => {}}

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );

    next();
});

server.use(express.json())
// server.use(bodyParser.urlencoded({extended: true}))
server.use(morgan('dev'))

server.use("/rickandmorty", router)

module.exports = server