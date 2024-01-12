const axios = require("axios")

const APIKEY = "henrystaff"
const getCharacterByID = (res, id) => {
    const promise = axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
    promise.then(({data: {id, name, gender, species, image, origin, status}}) => {
        // console.log(res)
        // const {id, name, gender, species, image, origin, status} = data
        if (!id) throw Error("ERROR DE TEST")

        const character = {
            id,
            name,
            gender,
            species,
            origin, // {name: "", url: ""}
            image,
            status 
        }

        res.writeHead(200, {"Content-Type": "application/json"}) // text/plain
        res.end(JSON.stringify(character)) 
    })
    promise.catch(err =>  {
        console.log("PRIMER CATCH")
        console.log(err)
    })
    promise.catch(err => {
        console.log("SEGUNDO CATCH")
        res.writeHead(500, {"Content-Type": "text/plain"}).end(`error interno - ${err.message}`)
    })
    // .then((data)) // TEST
    
        // if(Number(id) !== NaN){
        //     const character = data.find(char => char.id == id) // filter(char => char.id !== id) // character[Number(id)]

        //     if(character) {
        //         return res.writeHead(200, {"Content-Type": "application/json"}) // text/plain
        //         .end(JSON.stringify(character))
        //     }
        // }

        // res.writeHead(500, {"Content-Type": "text/plain"}).end("error")
}

module.exports = getCharacterByID

// axios.get(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
// .then((response) => {
//     const { id, name, gender, species, origin, image, status } = response.data

//     const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status
//     }
//     res.end(JSON.stringify(character))
// })
// .catch((error)=>{
//     res.writeHead(500, { "Content-Type": "text/plain" });
   