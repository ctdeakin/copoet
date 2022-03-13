const {Client} = require('pg')
const CONNECTION_STRING = 'postgres://localhost:5432/copoet'
const client = new Client(CONNECTION_STRING)

module.exports = {
    client
}

//database adapters

async function getAllUsers() {
    try{
        const {rows: users} = await client.query(
           ` SELECT * FROM users;`
        )

        return users

    }catch(error){
        throw error
    }
}

async function getAllPoems() {
    try{
        const{rows: poems} = await client.query(`
        SELECT * FROM poems;
        `)
    }catch(error){
        throw error
    }
}