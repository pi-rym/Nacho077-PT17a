const server = require('./server')
const {conn} = require('./DB_connection')

const PORT = 3001
// conn.sync().then(() => {
server.listen(PORT, async () => {
    await conn.sync({force: true, alter: false})
    console.log("DB conectada")
    console.log("Server starting in port", PORT)
})
// })


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
