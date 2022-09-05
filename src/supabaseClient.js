import {createClient} from "@supabase/supabase-js"
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient("https://paooxhvrhwupqukhfjrs.supabase.co", supabaseAnonKey)

//database adapters

export async function getAllUsers() {
    try{
        const {rows: users} = await supabase.query(
           ` SELECT * FROM users;`
        )

        return users

    }catch(error){
        throw error
    }
}

export async function getPoemsByUserId(userId) {
    try{
        const{rows: poems} = await supabase.query(`
        SELECT * FROM poems
        WHERE poems.poet=$1;
        `, [userId])
        return poems
    }catch(error){
        throw error
    }
}

export async function getLinesByPoemId(poemId) {
    try{
        const{rows: lines} = await supabase.query(`
            SELECT * FROM lines
            WHERE lines.poem=$1
        `, [poemId])
        return lines
    }catch(error){
        throw error
    }
}


export async function postPoemByUserId(userId, poem) {
    try{
       const { rows: poemId }= await supabase.query(`
        INSERT INTO poems (poet, title) VALUES ($1, $2) RETURNING id;
       `, [userId, poem.title])
       let lines = poem.lines
       const linesWithId = lines.map(line => [line.content, poemId[0].id])
       const response = await supabase.query(format("INSERT INTO lines (content, poem) VALUES %L RETURNING *;"
       , linesWithId))
        return response
    } catch(error){
        throw(error)
    }
}


