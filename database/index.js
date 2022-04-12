const {Client} = require('pg')
const CONNECTION_STRING = process.env.DATABASE_URL || 'postgres://localhost:5432/copoet'
const client = new Client({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  });
var format = require('pg-format')

module.exports = {
    client,
    getAllUsers,
    getPoemsByUserId,
    getLinesByPoemId,
    postPoemByUserId,
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


async function postPoemByUserId(userId, poem) {
    try{
       const { rows: poemId }= await client.query(`
        INSERT INTO poems (poet, title) VALUES ($1, $2) RETURNING id;
       `, [userId, poem.title])
       let lines = poem.lines
       const linesWithId = lines.map(line => [line.content, poemId[0].id])
       const response = await client.query(format("INSERT INTO lines (content, poem) VALUES %L RETURNING *;"
       , linesWithId))
        return response
    } catch(error){
        throw(error)
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
