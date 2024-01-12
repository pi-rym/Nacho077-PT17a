const http = require("http")
// const url2 = require("url")
const data = require('./utils/data')
const characterController = require("./controllers/getCharacters") // {getCharacterByID: () => {}}

const PORT = 3001

http.createServer((req, res) => { // request, response
    res.setHeader("Access-Control-Allow-Origin", "*")

    const {url} = req // /rickandmorty/character/123
    if(url.includes("/rickandmorty/character")){
        // console.log(url2.parse(url)) Investigar
        const id = url.split("/").pop() // [rickandmorty, character, 321]
        if(Number(id) !== NaN){
            characterController(res, id) //.getCharacterByID(res, id)
        } else {
            res.writeHead(400, {"Content-Type": "text/plain"}).end("El id debe ser un número")
        }
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"}).end("Not Found")
    }

}).listen(PORT, "localhost")
