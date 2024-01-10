const http = require("http")
const url2 = require("url")
const data = require('./utils/data')

const PORT = 3001

http.createServer((req, res) => { // request, response
    res.setHeader("Access-Control-Allow-Origin", "*")

    const {url} = req // /rickandmorty/character/123
    if(url.includes("/rickandmorty/character")){
        // console.log(url2.parse(url)) Investigar
        const id = url.split("/").pop() // [rickandmorty, character, 321]
        if(Number(id) !== NaN){
            const character = data.find(char => char.id == id) // filter(char => char.id !== id) // character[Number(id)]

            if(character) {
                return res.writeHead(200, {"Content-Type": "application/json"}) // text/plain
                .end(JSON.stringify(character))
            }
        }

        res.writeHead(500, {"Content-Type": "text/plain"}).end("error")
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"}).end("Not Found")
    }

}).listen(PORT, "localhost")
