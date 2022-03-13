const {Client} = require('pg')
const CONNECTION_STRING = 'postgres://localhost:5432/copoet'
const client = new Client(CONNECTION_STRING)

module.exports = {
    client,
    getAllUsers,
    getPoemsByUserId,
    getLinesByPoemId,
    testDb
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

async function getPoemsByUserId(userId) {
    try{
        const{rows: poems} = await client.query(`
        SELECT * FROM poems
        WHERE poems.poet=$1;
        `, [userId])
        return poems
    }catch(error){
        throw error
    }
}

async function getLinesByPoemId(poemId) {
    try{
        const{rows: lines} = await client.query(`
            SELECT * FROM lines
            WHERE lines.poem=$1
        `, [poemId])
        return lines
    }catch(error){
        throw error
    }
}



async function testDb(){
try{
    const users = await getAllUsers();
    console.log({users}) //annotating logs as object

    const poem = await getPoemsByUserId(1);
    console.log({poem})

    const lines = await getLinesByPoemId(1)
    console.log({lines})
}catch(error){
    throw(error)
}

}

async function init(){
    try{await client.connect()
        await testDb()} catch(error){
            throw(error)
        }
    

}
