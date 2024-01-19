const http = require("http")
const url2 = require("url")
const express = require('express')
const server = express()
const router = require('./routes')

const bodyParser = require('body-parser')
const morgan = require('morgan')
const data = require('./utils/data')
const characterController = require("./controllers/getCharacters") // {getCharacterByID: () => {}}

const PORT = 3001

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

server.listen(PORT, () => console.log("Server starting in port", PORT))

// http.createServer((req, res) => { // request, response
//     res.setHeader("Access-Control-Allow-Origin", "*")

//     const {url} = req // /rickandmorty/character/123
//     if(url.includes("/rickandmorty/character")){
//         // console.log(url2.parse(url)) Investigar
//         const id = url.split("/").pop() // [rickandmorty, character, 321]
//         if(Number(id) !== NaN){
//             characterController(res, id) //.getCharacterByID(res, id)
//         } else {
//             res.writeHead(400, {"Content-Type": "text/plain"}).end("El id debe ser un número")
//         }
//     } else {
//         res.writeHead(404, {"Content-Type": "text/plain"}).end("Not Found")
//     }

// }).listen(PORT, "localhost")
