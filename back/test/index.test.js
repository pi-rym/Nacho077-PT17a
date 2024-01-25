const server = require('../src/server')
const session = require('supertest')
const agent = session(server)

describe("/character/{id}", () => {
    it("Should return status 200 with existent id", async () => {
        const response = await agent.get("/rickandmorty/character/1")
        expect(response.statusCode).toBe(200)
    })

    it("Should return a body with 'id, name, species, gender, status, origin and image'", async () => {
        const {body} = await agent.get("/rickandmorty/character/1")
        expect(body).toHaveProperty('id')
        expect(body).toHaveProperty('name')
        expect(body).toHaveProperty('species')
        expect(body).toHaveProperty('gender')
        expect(body).toHaveProperty('status')
        expect(body).toHaveProperty('origin')
        expect(body).toHaveProperty('image')
    })

    it("Should return 404 with non existent id", async () => {
        const {statusCode} = await agent.get("/rickandmorty/character/321321321321321321")
        expect(statusCode).toBe(404)
    })

    it("Should return 500 with not numerical id", async () => {
        const {statusCode} = await agent.get("/rickandmorty/character/1a")
        expect(statusCode).toBe(500)
    })
})

describe("/user/login", () => {
    it("Should return status 200 with existent user", async () => {
        const response = await agent.get("/rickandmorty/users/login?user=test@gmail.com&password=123456")
        expect(response.statusCode).toBe(200)
        expect(response.body.access).toEqual(true)
    })

    it("Should return status 200 with non existent user", async () => {
        const response = await agent.get("/rickandmorty/users/login?user=test@gmail.com&password=12")
        expect(response.statusCode).toBe(200)
        expect(response.body.access).toEqual(false)
    })
})

describe("/favorites", () => {
    const character = {
        name: "Nacho",
        id: 200,
        gender: "Male",
        image: "asdas",
        status: "Alive",
        origin: "Mi casita"
    }

    const character2 = {
        name: "Nacho2",
        id: 201,
        gender: "Male",
        image: "asdas",
        status: "Alive",
        origin: "Mi casita"
    }

    it("Should correctly add a character to favorites", async () => {
        const response = await agent.post("/rickandmorty/favorites").send(character)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual([character])

        const response2 = await agent.post("/rickandmorty/favorites").send(character2)
        expect(response2.statusCode).toBe(200)
        // expect(response2.body).toEqual([character, character2]) // [character2, character]
        expect(response2.body).toContainEqual(character)
        expect(response2.body).toContainEqual(character2)
        expect(response2.body.length).toBe(2)
    })

    it("Should return an error if favorite not exist", async () => {
        const response = await agent.delete("/rickandmorty/favorites/1")
        expect(response.body).toEqual({"message": "That character doesnt exist in favorites"})
    })

    it("Should return remaining favorites", async () => {
        const response = await agent.delete("/rickandmorty/favorites/200")
        expect(response.body).toContainEqual(character2)
        expect(response.body.length).toBe(1)
    })
})